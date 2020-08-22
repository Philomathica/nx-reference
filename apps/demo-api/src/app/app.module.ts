import { Module } from '@nestjs/common';

import { DemoApiSensorsApiModule } from '@nx-reference/demo-api/sensors/api';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DemoApiSensorsApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
