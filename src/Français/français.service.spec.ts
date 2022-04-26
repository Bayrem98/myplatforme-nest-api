import { Test, TestingModule } from '@nestjs/testing';
import { FrançaisService } from './français.service';

describe('FrançaisService', () => {
  let service: FrançaisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FrançaisService],
    }).compile();

    service = module.get<FrançaisService>(FrançaisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
