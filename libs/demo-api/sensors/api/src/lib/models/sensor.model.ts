import { AggregateRoot } from '@nestjs/cqrs';

export class SensorModel extends AggregateRoot {
   aggregateId: string;
   name: string;


}
