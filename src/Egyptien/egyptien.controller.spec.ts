import { Test, TestingModule } from '@nestjs/testing';
import { EgyptienController } from './egyptien.controller';

describe('EgyptienController', () => {
  let controller: EgyptienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EgyptienController],
    }).compile();

    controller = module.get<EgyptienController>(EgyptienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
