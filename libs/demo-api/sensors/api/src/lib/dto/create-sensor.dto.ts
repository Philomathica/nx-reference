import { IsString } from 'class-validator';

import { CreateSensor } from '@nx-reference/demo-api/sensors/interfaces';

export class CreateSensorDto implements CreateSensor {
  @IsString()
  readonly name: string;
}
