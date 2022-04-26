import { Test, TestingModule } from '@nestjs/testing';
import { AlgerienController } from './algerien.controller';

describe('AlgerienController', () => {
  let controller: AlgerienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlgerienController],
    }).compile();

    controller = module.get<AlgerienController>(AlgerienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
