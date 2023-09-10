import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './unit.entity';
import { UnitDto } from './input/unit.dto';

@Injectable()
export class UnitService {
  private readonly logger = new Logger(UnitService.name);
  constructor(
    @InjectRepository(Unit)
    private unitRepository: Repository<Unit>,
  ) {}

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
}
