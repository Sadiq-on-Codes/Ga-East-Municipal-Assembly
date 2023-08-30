import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentPdf } from './DepartmentPdf .entity';
import { Repository } from 'typeorm';
import { CreateDepartmentPdfDto } from './input/create-department.dto';
import { UpdateDepartmentPdfDto } from './input/update-department.dto';

@Injectable()
export class DepartmentDocumentService {
  private readonly logger = new Logger(DepartmentDocumentService.name);

  constructor(
    @InjectRepository(DepartmentPdf)
    private departmentPdfRepository: Repository<DepartmentPdf>,
  ) {}

  async createDepartmentPdf(
    createDepartmentPdfDto: CreateDepartmentPdfDto,
  ): Promise<[{ message: string }, DepartmentPdf]> {
    try {
      const { filename, title, categoryId } = createDepartmentPdfDto;
      const departmentPdf = new DepartmentPdf();
      departmentPdf.filename = filename;
      departmentPdf.title = title;
      departmentPdf.category = categoryId;

      const createdDepartmentPdf = await this.departmentPdfRepository.save(
        departmentPdf,
      );

      this.logger.log(
        `Created Department PDF with ID ${createdDepartmentPdf.id}`,
      );

      return [
        { message: 'New document added successfully' },
        createdDepartmentPdf,
      ];
    } catch (error) {
      this.logger.error(
        `Error creating Department PDF. Error: ${error.message}`,
      );
      throw error;
    }
  }

  async updateDepartmentPdf(
    id: number,
    updateDepartmentPdfDto: UpdateDepartmentPdfDto,
  ): Promise<[{ message: string }, DepartmentPdf]> {
    const document = await this.departmentPdfRepository.findOne({
      where: {
        id,
      },
    });

    if (!document) {
      throw new NotFoundException('document not found');
    }

    // Update the department fields based on the data in updateDepartmentDto
    document.filename = updateDepartmentPdfDto.filename || document.filename;
    document.title = updateDepartmentPdfDto.title || document.title;
    document.category = updateDepartmentPdfDto.category || document.category;
    document.updatedAt = new Date();

    return [
      { message: 'document updated successfully' },
      await this.departmentPdfRepository.save(document),
    ];
  }

  async deleteDepartmentPdf(id: number): Promise<string> {
    const result = await this.departmentPdfRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Department PDF with ID ${id} not found`);
    }

    this.logger.log(`Deleted Department PDF with ID ${id}`);
    return 'document deleted';
  }

  async getDepartmentPdfById(id: number): Promise<DepartmentPdf> {
    const departmentPdf = await this.departmentPdfRepository.findOne({
      where: {
        id,
      },
    });

    if (!departmentPdf) {
      throw new NotFoundException(`Department PDF with ID ${id} not found`);
    }

    this.logger.log(`Fetched Department PDF with ID ${id}`);

    return departmentPdf;
  }

  async getAllDepartmentPdfs(): Promise<DepartmentPdf[]> {
    const departmentPdfs = await this.departmentPdfRepository.find();

    this.logger.log(`Fetched ${departmentPdfs.length} Department PDFs`);

    return departmentPdfs;
  }
}
