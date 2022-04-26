import { Module } from '@nestjs/common';
import { FrançaisService } from './français.service';

@Module({
  providers: [FrançaisService]
})
export class FrançaisModule {}
