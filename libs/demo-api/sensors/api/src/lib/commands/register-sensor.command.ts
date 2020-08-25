// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RegisterSensorDto } from '../dto';
import { DomainCommand } from './domain-command';

export class RegisterSensorCommand implements DomainCommand  {
  constructor(public readonly aggregateId: string, public readonly RegisterSensorDto: RegisterSensorDto) {}
}
