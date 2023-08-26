import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DepartmentPdf } from './DepartmentPdf .entity';
import { Repository } from 'typeorm';

@Injectable()
export class DepartmentDocumentService {
  constructor(
    @InjectRepository(DepartmentPdf)
    private departmentPdfRepository: Repository<DepartmentPdf>,
  ) {}

  async createDepartmentPdf(
    createDepartmentPdfDto: CreateDepartmentPdfDto,
  ): Promise<DepartmentPdf> {
    const departmentPdf = this.departmentPdfRepository.create(
      createDepartmentPdfDto,
    );
    return this.departmentPdfRepository.save(departmentPdf);
  }

  async updateDepartmentPdf(
    id: number,
    updateDepartmentPdfDto: UpdateDepartmentPdfDto,
  ): Promise<DepartmentPdf> {
    const departmentPdf = await this.departmentPdfRepository.preload({
      id,
      ...updateDepartmentPdfDto,
    });
    if (!departmentPdf) {
      throw new NotFoundException(`Department PDF with ID ${id} not found`);
    }
    return this.departmentPdfRepository.save(departmentPdf);
  }

  async deleteDepartmentPdf(id: number): Promise<void> {
    const result = await this.departmentPdfRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Department PDF with ID ${id} not found`);
    }
  }

  async getDepartmentPdfById(id: number): Promise<DepartmentPdf> {
    const departmentPdf = await this.departmentPdfRepository.findOne(id);
    if (!departmentPdf) {
      throw new NotFoundException(`Department PDF with ID ${id} not found`);
    }
    return departmentPdf;
  }

  async getAllDepartmentPdfs(): Promise<DepartmentPdf[]> {
    return this.departmentPdfRepository.find();
  }
}
