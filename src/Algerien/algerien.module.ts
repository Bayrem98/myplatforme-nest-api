import { Module } from '@nestjs/common';
import { AlgerienService } from './algerien.service';
import { AlgerienController } from './algerien.controller';

@Module({
  providers: [AlgerienService],
  controllers: [AlgerienController]
})
export class AlgerienModule {}
