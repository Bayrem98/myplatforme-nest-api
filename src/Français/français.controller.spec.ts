import { Test, TestingModule } from '@nestjs/testing';
import { FrançaisController } from './français.controller';

describe('FrançaisController', () => {
  let controller: FrançaisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FrançaisController],
    }).compile();

    controller = module.get<FrançaisController>(FrançaisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
