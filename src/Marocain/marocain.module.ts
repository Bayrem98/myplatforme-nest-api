import { Module } from '@nestjs/common';
import { MarocainService } from './marocain.service';

@Module({
  providers: [MarocainService]
})
export class MarocainModule {}
