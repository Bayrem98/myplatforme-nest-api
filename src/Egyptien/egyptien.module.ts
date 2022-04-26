import { Module } from '@nestjs/common';
import { EgyptienService } from './egyptien.service';

@Module({
  providers: [EgyptienService]
})
export class EgyptienModule {}
