import { DomainEvent } from './domain-event';

export class SensorValueUpdatedEvent implements DomainEvent {
  constructor(
    public readonly aggregateId: string,
    public readonly time: Date,
    public readonly currentValue: number,
    public readonly previousValue?: number,
  ) {}
}
