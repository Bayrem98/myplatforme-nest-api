import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlgerienModule } from './algerien/algerien.module';
import { EgyptienController } from './egyptien/egyptien.controller';
import { EgyptienModule } from './egyptien/egyptien.module';
import { EspagnolController } from './espagnol/espagnol.controller';
import { EspagnolModule } from './espagnol/espagnol.module';
import { FrançaisController } from './français/français.controller';
import { FrançaisModule } from './français/français.module';
import { ItalienController } from './italien/italien.controller';
import { ItalienModule } from './italien/italien.module';
import { MarocainController } from './marocain/marocain.controller';
import { MarocainModule } from './marocain/marocain.module';
import { TunisienController } from './tunisien/tunisien.controller';
import { TunisienModule } from './tunisien/tunisien.module';

@Module({
  imports: [AlgerienModule, EgyptienModule, EspagnolModule, FrançaisModule, ItalienModule, MarocainModule, TunisienModule],
  controllers: [AppController, EgyptienController, EspagnolController, FrançaisController, ItalienController, MarocainController, TunisienController],
  providers: [AppService],
})
export class AppModule {}
