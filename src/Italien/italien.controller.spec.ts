import { Test, TestingModule } from '@nestjs/testing';
import { ItalienController } from './italien.controller';

describe('ItalienController', () => {
  let controller: ItalienController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItalienController],
    }).compile();

    controller = module.get<ItalienController>(ItalienController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
