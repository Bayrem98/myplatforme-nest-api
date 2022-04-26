import { Test, TestingModule } from '@nestjs/testing';
import { EgyptienService } from './egyptien.service';

describe('EgyptienService', () => {
  let service: EgyptienService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EgyptienService],
    }).compile();

    service = module.get<EgyptienService>(EgyptienService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
