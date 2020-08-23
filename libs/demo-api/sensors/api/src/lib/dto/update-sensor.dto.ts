import { PartialType } from '@nestjs/swagger';
import { CreateSensorDto } from './create-sensor.dto';
import { UpdateSensor } from '@nx-reference/demo-api/sensors/interfaces';

export class UpdateSensorDto extends PartialType(CreateSensorDto) implements UpdateSensor {}
