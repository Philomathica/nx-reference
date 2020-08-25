import { SensorValueDto } from '../dto';
import { DomainCommand } from './domain-command';

export class UpdateSensorValueCommand implements DomainCommand {
  constructor(public readonly aggregateId: string, public readonly value: SensorValueDto) {}
}
