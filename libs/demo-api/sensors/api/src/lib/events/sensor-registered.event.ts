import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Uom } from '@nx-reference/demo-api/sensors/interfaces';
import { DomainEvent } from './domain-event';

export class SensorRegisteredEvent implements DomainEvent {
  constructor(public readonly aggregateId: string, public readonly time: Date, public readonly name: string, public readonly uom: Uom) {}
}
