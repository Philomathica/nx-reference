import { CreateSensor, SensorType } from '@nx-reference/demo-api/sensors/interfaces';

const sensorLength = Object.keys(SensorType).length;

const randomSensorType = (): SensorType => {
  const randomSensorIndex = Math.floor(Math.random() * sensorLength);
  return Object.values(SensorType)[randomSensorIndex];
}

export const createSensor = (name: string): CreateSensor => ({ name, type: randomSensorType() });
export const createDemoSensors = (): CreateSensor[] => Array.from(Array(100), (_x, i) => createSensor(`sensor-${i}`));
