import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentDocumentService } from './department-document.service';

describe('DepartmentDocumentService', () => {
  let service: DepartmentDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartmentDocumentService],
    }).compile();

    service = module.get<DepartmentDocumentService>(DepartmentDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
