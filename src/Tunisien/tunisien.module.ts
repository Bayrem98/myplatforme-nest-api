import { Module } from '@nestjs/common';
import { TunisienService } from './tunisien.service';

@Module({
  providers: [TunisienService]
})
export class TunisienModule {}
