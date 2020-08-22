import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DemoApiSensorsApiModule } from '@nx-reference/demo-api/sensors/api';
import { SharedApiHealthModule } from '@nx-reference/shared/api/health';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SharedApiHealthModule,
    MongooseModule.forRoot('mongodb://localhost:27017/demo'),
    DemoApiSensorsApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
