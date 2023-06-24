import { Test, TestingModule } from '@nestjs/testing';
import { DepartmentDocumentController } from './department-document.controller';

describe('DepartmentDocumentController', () => {
  let controller: DepartmentDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartmentDocumentController],
    }).compile();

    controller = module.get<DepartmentDocumentController>(DepartmentDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
