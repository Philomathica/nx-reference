import { IsEnum, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { CreateSensor, SensorType } from '@nx-reference/demo-api/sensors/interfaces';

export class CreateSensorDto implements CreateSensor {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty({ enum: SensorType, example: SensorType.Humidity})
  @IsEnum(SensorType)
  readonly type: SensorType;
}
