import { Test, TestingModule } from '@nestjs/testing';
import { MarocainService } from './marocain.service';

describe('MarocainService', () => {
  let service: MarocainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarocainService],
    }).compile();

    service = module.get<MarocainService>(MarocainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
