import { Module } from '@nestjs/common';
import { ItalienService } from './italien.service';

@Module({
  providers: [ItalienService]
})
export class ItalienModule {}
