import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { StoreEventBus } from 'event-sourcing-nestjs';

import { RegisterSensorCommand } from '../register-sensor.command';
import { SensorRegisteredEventV1 } from '../../events';

@CommandHandler(RegisterSensorCommand)
export class RegisterSensorCommandHandler implements ICommandHandler<RegisterSensorCommand, string> {

  constructor(private readonly eventBus: StoreEventBus) {}

  // TODO: change return type from command handler
  execute(command: RegisterSensorCommand): Promise<string> {
    console.log(`Executing command ${JSON.stringify(command)}`);
    const sensorRegistered =  new SensorRegisteredEventV1();
    sensorRegistered.name = command.RegisterSensorDto.name;
    sensorRegistered.uom = command.RegisterSensorDto.uom;

    console.log(sensorRegistered);
    console.log(JSON.stringify(sensorRegistered));

    this.eventBus.publish(sensorRegistered);


    return Promise.resolve(`new Sensor Registered with id ${command.aggregateId}, name: ${command.RegisterSensorDto.name} and uom ${command.RegisterSensorDto.uom}`);
  }

}
