import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DepartmentDocumentService } from './department-document.service';
import { DepartmentPdf } from './DepartmentPdf .entity';
import { CreateDepartmentPdfDto } from './input/create-department.dto';
import { UpdateDepartmentPdfDto } from './input/update-department.dto';

@Controller('department-document')
export class DepartmentDocumentController {
  constructor(private departmentDocumentService: DepartmentDocumentService) {}

  @Get()
  async getAllDepartmentPdfs(): Promise<DepartmentPdf[]> {
    return this.departmentDocumentService.getAllDepartmentPdfs();
  }
  @Get(':id')
  async getDepartmentPdfById(@Param('id') id: number): Promise<DepartmentPdf> {
    const departmentPdf =
      await this.departmentDocumentService.getDepartmentPdfById(id);

    if (!departmentPdf) {
      throw new NotFoundException(`Department PDF with ID ${id} not found`);
    }

    return departmentPdf;
  }
  @Post()
  async createDepartmentPdf(
    @Body() createDepartmentPdfDto: CreateDepartmentPdfDto,
  ): Promise<[{ message: string }, DepartmentPdf]> {
    return this.departmentDocumentService.createDepartmentPdf(
      createDepartmentPdfDto,
    );
  }
  @Patch('update/:id')
  async updateDepartmentPdf(
    @Param('id') id: number,
    @Body() updateDepartmentPdfDto: UpdateDepartmentPdfDto,
  ): Promise<[{ message: string }, DepartmentPdf]> {
    return this.departmentDocumentService.updateDepartmentPdf(
      id,
      updateDepartmentPdfDto,
    );
  }

  @Delete('delete/:id')
  async deletePostById(@Param('id') documentId: number): Promise<string> {
    return await this.departmentDocumentService.deleteDepartmentPdf(documentId);
  }
}
