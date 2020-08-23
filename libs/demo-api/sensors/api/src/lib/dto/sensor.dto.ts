import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';

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
}
