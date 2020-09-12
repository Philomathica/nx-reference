import { SensorType } from './sensor-type.enum';

export interface Sensor {
  readonly id: string;
  readonly name: string;
  readonly value?: string;
  readonly type: SensorType;
}
