import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';
import { RegisterSensorDto } from './dto';
import { CommandBus } from '@nestjs/cqrs';
import { RegisterSensorCommand } from './commands';
import { Observable, from } from 'rxjs';

@Injectable()
export class DemoApiSensorsApiCqrsService {
  constructor(private readonly commandBus: CommandBus) {
    console.log('DemoApiSensorsApiCqrsService constructed');
  }

  register(registerSensorDto: RegisterSensorDto): Observable<string> { // TODO: change return type from command handler
    return from(this.commandBus.execute(new RegisterSensorCommand(uuid(), registerSensorDto)));
  }
}
