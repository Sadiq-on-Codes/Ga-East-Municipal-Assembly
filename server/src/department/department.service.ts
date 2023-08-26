import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Department } from './department.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import APIFeatures from 'src/apiFeatures/apiFeatures';
import { CreateDepartmentDto } from './input/department.dto';
import { UpdateDepartmentDto } from './input/updateDepartment.dto';

@Injectable()
export class DepartmentService {
  private readonly logger = new Logger(DepartmentService.name);
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  async getAllDepartments(queryParams): Promise<Department[]> {
    const queryBuilder = this.departmentRepository.createQueryBuilder();

    // Apply filters
    const apiFeatures = new APIFeatures(queryBuilder, queryParams)

      .filter()
      .sort()
      .limitFields()
      .paginate();

    // Execute query
    const departments = await apiFeatures.getQuery().getMany();

    if (!departments) {
      throw new NotFoundException(`No departments to show`);
    }
    return departments;
  }

  async createDepartment(
    departmentDto: CreateDepartmentDto,
  ): Promise<Department> {
    try {
      const { name, about, image } = departmentDto;
      const capitalizedDepartmentName = name
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
        )
        .join(' ');
      const existingDepartment = await this.departmentRepository.findOne({
        where: { name: capitalizedDepartmentName },
      });
      if (existingDepartment) {
        throw new ConflictException(
          'Department with the same name already exists.',
        );
      }

      const department = new Department();
      department.name = capitalizedDepartmentName;
      department.about = about;
      department.image = image;
      department.createdAt = new Date();
      const createdDepartment = await this.departmentRepository.save(
        department,
      );

      this.logger.log(
        `New department with id ${createdDepartment.id} has been created.`,
      );

      return createdDepartment;
    } catch (error) {
      this.logger.error(
        `Error occurred while creating a new department. Error: ${error}`,
      );
      throw error;
    }
  }
  //TODO-no relations for pdf
  async getDepartmentById(departmentId: number) {
    const department = await this.departmentRepository.findOne({
      where: {
        id: departmentId,
      },
      relations: ['pdfs'],
    });

    if (!department) {
      throw new NotFoundException(`No department found`);
    }
    return department;
  }

  async updateDepartment(
    departmentId: number,
    updateDepartmentDto: UpdateDepartmentDto,
  ): Promise<Department> {
    const department = await this.departmentRepository.findOne({
      where: {
        id: departmentId,
      },
    });

    if (!department) {
      throw new NotFoundException('Department not found');
    }

    // Update the department fields based on the data in updateDepartmentDto
    department.name = updateDepartmentDto.name || department.name;
    department.image = updateDepartmentDto.image || department.image;
    department.about = updateDepartmentDto.about || department.about;
    department.updatedAt = new Date();

    return await this.departmentRepository.save(department);
  }

  async deleteDepartmentById(departmentId: number): Promise<void> {
    try {
      const result = await this.departmentRepository.delete(departmentId);

      if (result.affected === 0) {
        throw new NotFoundException(
          `Department with ID ${departmentId} not found`,
        );
      }
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
