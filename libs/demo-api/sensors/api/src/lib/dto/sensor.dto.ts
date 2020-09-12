import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { Sensor, SensorType } from '@nx-reference/demo-api/sensors/interfaces';

@Exclude()
export class SensorDto implements Sensor {
  @Expose({ name: '_id' })
  @ApiProperty({ example: '5f5c80e5b581119c8f543c9b'})
  readonly id: string;

  @Expose()
  @ApiProperty({ example: 'sensor-0'})
  readonly name: string;

  @Expose()
  @ApiProperty({ example: '5.0'})
  readonly value: string;

  @Expose()
  @ApiProperty({ enum: SensorType, example: SensorType.Humidity})
  readonly type: SensorType;
}
