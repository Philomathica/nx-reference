import { Controller, Get, Post, Body } from '@nestjs/common';
import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';
import { Observable } from 'rxjs';
import { SensorEntity } from './entities/sensor.entity';
import { CreateSensorDto } from './dto';

@Controller('sensors')
export class DemoApiSensorsApiController {
  constructor(
    private readonly demoApiSensorsApiService: DemoApiSensorsApiService
  ) {}

  @Get()
  findAll(): Observable<SensorEntity[]> {
    return this.demoApiSensorsApiService.findAll();
  }

  @Post()
  create(@Body() createSensorDto: CreateSensorDto): Observable<SensorEntity> {
    return this.demoApiSensorsApiService.create(createSensorDto);
  }
}
