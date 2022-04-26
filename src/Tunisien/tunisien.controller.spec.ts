import { Test, TestingModule } from '@nestjs/testing';
import { TunisienController } from './tunisien.controller';

describe('TunisienController', () => {
  let controller: TunisienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TunisienController],
    }).compile();

    controller = module.get<TunisienController>(TunisienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
