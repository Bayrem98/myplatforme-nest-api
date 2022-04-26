import { Test, TestingModule } from '@nestjs/testing';
import { EspagnolService } from './espagnol.service';

describe('EspagnolService', () => {
  let service: EspagnolService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EspagnolService],
    }).compile();

    service = module.get<EspagnolService>(EspagnolService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
