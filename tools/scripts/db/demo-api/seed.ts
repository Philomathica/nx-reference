import { seedSensors } from './sensors/seed';

async function seed(): Promise<void> {
  await seedSensors();
}

seed();
