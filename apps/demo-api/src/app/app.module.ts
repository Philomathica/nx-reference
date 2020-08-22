import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DemoApiSensorsApiModule } from '@nx-reference/demo-api/sensors/api';
import { SharedApiModule } from '@nx-reference/shared/api';

@Module({
  imports: [
    SharedApiModule,
    MongooseModule.forRoot('mongodb://localhost:27017/demo'),
    DemoApiSensorsApiModule,
  ],
})
export class AppModule {}
