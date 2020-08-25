import { Uom, RegisterSensor } from '@nx-reference/demo-api/sensors/interfaces';
import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterSensorDto implements RegisterSensor {
  // TODO: create async IsUniqueSensorName() validator
  @ApiProperty({ example: 'Temperature living room'})
  @IsString()
  name: string;

  @IsEnum(Uom)
  @ApiProperty( { enum: Uom , example: Uom.Kelvin})
  uom: Uom;
}
