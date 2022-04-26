import { Test, TestingModule } from '@nestjs/testing';
import { ItalienService } from './italien.service';

describe('ItalienService', () => {
  let service: ItalienService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItalienService],
    }).compile();

    service = module.get<ItalienService>(ItalienService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
