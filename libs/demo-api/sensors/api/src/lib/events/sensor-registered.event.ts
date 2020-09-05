import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Uom } from '@nx-reference/demo-api/sensors/interfaces';
import { StorableEvent } from 'event-sourcing-nestjs';

export class SensorRegisteredEventV1 extends StorableEvent {
  id = '_id_';
  eventAggregate: 'Sensor';
  eventVersion: 1;
  eventName: 'SensorRegisteredEventV1';
  name: string;
  uom: Uom;
}
