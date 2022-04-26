import { Test, TestingModule } from '@nestjs/testing';
import { MarocainController } from './marocain.controller';

describe('MarocainController', () => {
  let controller: MarocainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarocainController],
    }).compile();

    controller = module.get<MarocainController>(MarocainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
