import { SensorValue } from '@nx-reference/demo-api/sensors/interfaces';
import { IsNumber } from 'class-validator';

export class SensorValueDto implements SensorValue {
  @IsNumber()
  value: number;
}
