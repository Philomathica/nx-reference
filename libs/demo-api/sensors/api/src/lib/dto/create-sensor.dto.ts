import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CreateSensor } from '@nx-reference/demo-api/sensors/interfaces';

export class CreateSensorDto implements CreateSensor {
  @ApiProperty()
  @IsString()
  readonly name: string;
}
