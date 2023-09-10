import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './unit.entity';
import { UnitDto } from './input/unit.dto';
import { UpdateUnitDto } from './input/Updateunit.dto';

@Injectable()
export class UnitService {
  private readonly logger = new Logger(UnitService.name);
  constructor(
    @InjectRepository(Unit)
    private unitRepository: Repository<Unit>,
  ) {}

  async getUnitById(id: number): Promise<Unit> {
    const unit = await this.unitRepository.findOne({
      where: {
        id,
      },
      relations: ['department'],
    });

    if (!unit) {
      throw new NotFoundException(`unit with ID ${id} not found`);
    }

    this.logger.log(`Fetched unit with ID ${id}`);

    return unit;
  }

  async createUnit(unitDto: UnitDto): Promise<[{ message: string }, Unit]> {
    try {
      const { title, about, departmentId } = unitDto;

      const unitName = new Unit();
      unitName.title = title;
      unitName.about = about;
      unitName.department = departmentId;
      const createdUnit = await this.unitRepository.save(unitName);

      this.logger.log(`New unit with id ${createdUnit.id} has been created.`);

      return [
        { message: `New unit with name ${createdUnit.title} added` },
        createdUnit,
      ];
    } catch (error) {
      this.logger.error(
        `Error occurred while creating a new unit. Error: ${error}`,
      );
      throw error;
    }
  }

  async updateUnit(
    id: number,
    updateUnitDto: UpdateUnitDto,
  ): Promise<[{ message: string }, Unit]> {
    const unit = await this.unitRepository.findOne({
      where: {
        id,
      },
    });

    if (!unit) {
      throw new NotFoundException('unit not found');
    }

    // Update the unit fields based on the data in updateDepartmentDto
    unit.title = updateUnitDto.title || unit.title;
    unit.about = updateUnitDto.about || unit.about;
    unit.department = updateUnitDto.department || unit.department;
    unit.updatedAt = new Date();

    return [
      { message: 'unit updated successfully' },
      await this.unitRepository.save(unit),
    ];
  }

  async deleteUnit(id: number): Promise<string> {
    const result = await this.unitRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Unit with ID ${id} not found`);
    }

    this.logger.log(`Deleted unit with ID ${id}`);
    return 'unit deleted';
  }
}
