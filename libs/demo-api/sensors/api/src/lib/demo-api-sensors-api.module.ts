import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';
import { DemoApiSensorsApiController } from './demo-api-sensors-api.controller';
import { SensorEntity, SensorEntitySchema } from './entities';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SensorEntity.name, schema: SensorEntitySchema },
    ]),
  ],
  controllers: [DemoApiSensorsApiController],
  providers: [DemoApiSensorsApiService],
  exports: [DemoApiSensorsApiService],
})
export class DemoApiSensorsApiModule {}
