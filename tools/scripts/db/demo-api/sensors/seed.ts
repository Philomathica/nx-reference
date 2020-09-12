import { NestFactory } from '@nestjs/core';
import { DemoApiSensorsApiModule, DemoApiSensorsApiService, SensorEntity } from '@nx-reference/demo-api/sensors/api';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { createDemoSensors } from '@nx-reference/demo-api/sensors/fixtures';

@Module({ imports: [ConfigModule.forRoot(), DemoApiSensorsApiModule, MongooseModule.forRoot(process.env.DATABASE_SENSORS_URI)] })
class AppModule {}

export async function seedSensors(): Promise<void> {
  const app = await NestFactory.createApplicationContext(AppModule);
  const demoApiSensorsApiService = app.get(DemoApiSensorsApiService);
  const sensorModel: Model<SensorEntity> = app.get(getModelToken(SensorEntity.name));
  const collectionName = sensorModel.collection.name;

  console.info(`tearing down collection ${collectionName}`);
  try {
    await sensorModel.collection.drop();
  } catch (error) {
    if (error.codeName === 'NamespaceNotFound') {
      console.warn(`${collectionName} collection not found`);
    } else {
      throw error;
    }
  }
  console.log(`tearing down collection ${collectionName} done`);

  console.info(`seeding collection ${collectionName}`);
  try {
    await Promise.all(createDemoSensors().map((sensor) => demoApiSensorsApiService.create(sensor).toPromise()));
  } catch (error) {
    throw error;
  }

  console.log(`seeding collection ${collectionName} done, closing connection`);
  await app.close();
}
