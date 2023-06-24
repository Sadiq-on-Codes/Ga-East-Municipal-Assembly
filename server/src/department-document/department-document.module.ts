import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentPdf } from './DepartmentPdf .entity';
import { DepartmentDocumentController } from './department-document.controller';
import { DepartmentDocumentService } from './department-document.service';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentPdf])],
  controllers: [DepartmentDocumentController],
  providers: [DepartmentDocumentService],
  exports: [TypeOrmModule.forFeature([DepartmentPdf])],
})
export class DepartmentDocumentModule {}
