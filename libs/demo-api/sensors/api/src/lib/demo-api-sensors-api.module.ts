import { Module } from '@nestjs/common';
import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';
import { DemoApiSensorsApiController } from './demo-api-sensors-api.controller';

@Module({
  controllers: [DemoApiSensorsApiController],
  providers: [DemoApiSensorsApiService],
  exports: [DemoApiSensorsApiService],
})
export class DemoApiSensorsApiModule {}
