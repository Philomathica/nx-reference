import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { Sensor, SensorType } from '@nx-reference/demo-api/sensors/interfaces';

@Exclude()
export class SensorDto implements Sensor {
  @ApiProperty()
  @Expose({ name: '_id' })
  readonly id: string;

  @Expose()
  @ApiProperty()
  readonly name: string;

  @Expose()
  @ApiProperty()
  readonly value: string;

  @Expose()
  @ApiProperty({ enum: SensorType, example: SensorType.Humidity})
  readonly type: SensorType;
}
