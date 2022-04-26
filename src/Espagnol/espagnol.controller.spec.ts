import { Test, TestingModule } from '@nestjs/testing';
import { EspagnolController } from './espagnol.controller';

describe('EspagnolController', () => {
  let controller: EspagnolController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EspagnolController],
    }).compile();

    controller = module.get<EspagnolController>(EspagnolController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
