import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';

@Schema()
export class SensorEntity extends Document implements Omit<Sensor, 'id'> {
  @Prop()
  name: string;

  @Prop()
  value: string;
}

export const SensorEntitySchema = SchemaFactory.createForClass(SensorEntity);
