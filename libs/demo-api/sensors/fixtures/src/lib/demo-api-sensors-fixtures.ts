import { CreateSensor } from '@nx-reference/demo-api/sensors/interfaces';

export const createSensor = (name: string): CreateSensor => ({ name });
export const createDemoSensors = (): CreateSensor[] => Array.from(Array(100), (_x, i) => createSensor(`sensor-${i}`));
