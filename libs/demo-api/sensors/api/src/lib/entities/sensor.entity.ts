import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Sensor, SensorType } from '@nx-reference/demo-api/sensors/interfaces';

@Schema()
export class SensorEntity extends Document implements Omit<Sensor, 'id'> {
  @Prop()
  name: string;

  @Prop()
  value?: string;

  @Prop()
  type: SensorType;
}

export const SensorEntitySchema = SchemaFactory.createForClass(SensorEntity);
