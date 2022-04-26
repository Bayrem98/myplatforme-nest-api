import { Test, TestingModule } from '@nestjs/testing';
import { TunisienService } from './tunisien.service';

describe('TunisienService', () => {
  let service: TunisienService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TunisienService],
    }).compile();

    service = module.get<TunisienService>(TunisienService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
