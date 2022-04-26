import { Test, TestingModule } from '@nestjs/testing';
import { AlgerienService } from './algerien.service';

describe('AlgerienService', () => {
  let service: AlgerienService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlgerienService],
    }).compile();

    service = module.get<AlgerienService>(AlgerienService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
