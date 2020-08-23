import { Controller, Get, Post, Body } from '@nestjs/common';
import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';
import { Observable } from 'rxjs';

import { CreateSensorDto } from './dto';
import { SensorDto } from './dto/sensor.dto';

@Controller('sensors')
export class DemoApiSensorsApiController {
  constructor(
    private readonly demoApiSensorsApiService: DemoApiSensorsApiService
  ) {}

  @Get()
  findAll(): Observable<SensorDto[]> {
    return this.demoApiSensorsApiService.findAll();
  }

  @Post()
  create(@Body() createSensorDto: CreateSensorDto): Observable<SensorDto> {
    return this.demoApiSensorsApiService.create(createSensorDto);
  }
}
