import { Exclude, Expose } from 'class-transformer';
import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';

@Exclude()
export class SensorDto implements Sensor {
  @Expose()
  readonly _id: string;

  @Expose()
  readonly value: string;

  @Expose()
  readonly name: string;
}
