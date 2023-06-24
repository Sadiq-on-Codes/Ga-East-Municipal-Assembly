import {
  Controller,
  Logger,
  Query,
  Get,
  Post,
  Body,
  Param,
  Patch,
  ParseIntPipe,
  NotFoundException,
  Delete,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.entity';
import { CreateDepartmentDto } from './input/department.dto';
import { UpdateDepartmentDto } from './input/updateDepartment.dto';

@Controller('departments')
export class DepartmentController {
  private readonly logger = new Logger(DepartmentController.name);
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async getAll(@Query() query: any): Promise<Department[]> {
    this.logger.debug(`Fetching all departments`);
    // Use the apiFeatures class to filter, sort, and limit the results
    return this.departmentService.getAllDepartments(query);
  }
  @Post('create/department')
  async createPost(
    @Body() departmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    return await this.departmentService.createDepartment(departmentDto);
  }
  @Get(':id')
  async findById(@Param('id') id: number): Promise<Department> {
    this.logger.debug(`Fetching department with id ${id}`);
    return this.departmentService.getDepartmentById(id);
  }

  @Patch('update/:id')
  async updatePost(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    try {
      const updatedDeparment = await this.departmentService.updateDepartment(
        id,
        updateDepartmentDto,
      );
      if (!updateDepartmentDto) {
        throw new NotFoundException(`Post with id ${id} not found`);
      }
      this.logger.log(`Department with id ${id} updated successfully`);
      return updatedDeparment;
    } catch (error) {
      this.logger.error(
        `Error updating department with id ${id}: ${error.message}`,
      );
      throw error;
    }
  }

  @Delete('delete/:id')
  async deleteDepartmentById(@Param('id') postId: number): Promise<void> {
    await this.departmentService.deleteDepartmentById(postId);
  }
}
