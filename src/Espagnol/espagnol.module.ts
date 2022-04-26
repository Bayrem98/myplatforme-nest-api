import { Module } from '@nestjs/common';
import { EspagnolService } from './espagnol.service';

@Module({
  providers: [EspagnolService]
})
export class EspagnolModule {}
