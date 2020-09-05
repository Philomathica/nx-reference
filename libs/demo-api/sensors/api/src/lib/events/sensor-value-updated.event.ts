import { StorableEvent } from 'event-sourcing-nestjs';


export class SensorValueUpdatedEventV1 extends  StorableEvent {
  id: string;
  eventAggregate: 'Sensor'
  eventVersion: 1;
  currentValue: number;
  previousValue?: number;
}
