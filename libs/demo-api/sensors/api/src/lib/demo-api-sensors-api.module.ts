import { Module} from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MongooseModule } from '@nestjs/mongoose';
import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';
import { DemoApiSensorsApiController } from './demo-api-sensors-api.controller';
import { SensorEntity, SensorEntitySchema } from './entities';

import { RegisterSensorCommandHandler } from './commands/handlers/register-sensor-command.handler';
import { DemoApiSensorsApiCqrsService } from './demo-api-sensors-api-cqrs.service';

export const commandHandlers = [RegisterSensorCommandHandler];

@Module({
  imports: [CqrsModule, MongooseModule.forFeature([{ name: SensorEntity.name, schema: SensorEntitySchema }])],
  controllers: [DemoApiSensorsApiController],
  providers: [DemoApiSensorsApiService, DemoApiSensorsApiCqrsService, ...commandHandlers],
  exports: [DemoApiSensorsApiService],
})
export class DemoApiSensorsApiModule {}
