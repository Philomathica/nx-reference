import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';

import { RegisterSensorCommand } from '../register-sensor.command';

@CommandHandler(RegisterSensorCommand)
export class RegisterSensorCommandHandler implements ICommandHandler<RegisterSensorCommand, string> {

  // TODO: change return type from command handler
  execute(command: RegisterSensorCommand): Promise<string> {
    console.log(`Executing command ${JSON.stringify(command)}`);


    return Promise.resolve(`new Sensor Registered with id ${command.aggregateId}, name: ${command.RegisterSensorDto.name} and uom ${command.RegisterSensorDto.uom}`);
  }

}
