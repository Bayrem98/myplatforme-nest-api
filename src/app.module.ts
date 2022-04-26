import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlgerienModule } from './algerien/algerien.module';
import { EgyptienController } from './egyptien/egyptien.controller';
import { EgyptienModule } from './egyptien/egyptien.module';
import { EspagnolController } from './espagnol/espagnol.controller';
import { EspagnolModule } from './espagnol/espagnol.module';

@Module({
  imports: [AlgerienModule, EgyptienModule, EspagnolModule],
  controllers: [AppController, EgyptienController, EspagnolController],
  providers: [AppService],
})
export class AppModule {}
