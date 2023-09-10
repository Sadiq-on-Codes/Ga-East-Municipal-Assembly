import { Controller } from '@nestjs/common';
import { UnitDto } from './input/unit.dto';
import { Unit } from './unit.entity';
import { UnitService } from './unit.service';
import {
  Body,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UpdateUnitDto } from './input/Updateunit.dto';

@Controller('unit')
export class UnitController {
  constructor(private unitService: UnitService) {}
  @Get(':id')
  async getDepartmentPdfById(@Param('id') id: number): Promise<Unit> {
    const unit = await this.unitService.getUnitById(id);

    if (!unit) {
      throw new NotFoundException(`Unit with ID ${id} not found`);
    }

    return unit;
  }
  @Post()
  async createUnit(
    @Body() unitDto: UnitDto,
  ): Promise<[{ message: string }, Unit]> {
    return this.unitService.createUnit(unitDto);
  }

  @Delete('delete/:id')
  async deleteUnitById(@Param('id') unitId: number): Promise<string> {
    return await this.unitService.deleteUnit(unitId);
  }
  @Patch('update/:id')
  async updateDepartmentPdf(
    @Param('id') id: number,
    @Body() updateUnitDto: UpdateUnitDto,
  ): Promise<[{ message: string }, Unit]> {
    return this.unitService.updateUnit(id, updateUnitDto);
  }
}
