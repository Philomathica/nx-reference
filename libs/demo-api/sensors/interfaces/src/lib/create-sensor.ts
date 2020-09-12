import { SensorType } from './sensor-type.enum';

export interface CreateSensor {
  readonly name: string;
  readonly type: SensorType;
}
