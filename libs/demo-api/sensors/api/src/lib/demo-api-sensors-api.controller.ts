import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiNotFoundResponse, ApiParam } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';
import { CreateSensorDto, UpdateSensorDto } from './dto';
import { SensorDto } from './dto/sensor.dto';

@Controller('sensors')
@ApiTags('coffees')
export class DemoApiSensorsApiController {
  constructor(private readonly demoApiSensorsApiService: DemoApiSensorsApiService) {}

  @Get()
  @ApiOkResponse({ type: [SensorDto] })
  findAll(): Observable<SensorDto[]> {
    return this.demoApiSensorsApiService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: SensorDto })
  @ApiNotFoundResponse()
  findOne(@Param('id') id: string): Observable<SensorDto> {
    return this.demoApiSensorsApiService.findOne(id);
  }

  @Post()
  @ApiOkResponse({ type: SensorDto })
  create(@Body() createSensorDto: CreateSensorDto): Observable<SensorDto> {
    return this.demoApiSensorsApiService.create(createSensorDto);
  }

  @Patch(':id')
  @ApiOkResponse({ type: SensorDto })
  @ApiNotFoundResponse()
  update(@Param('id') id: string, @Body() updateSensorDto: UpdateSensorDto): Observable<SensorDto> {
    return this.demoApiSensorsApiService.update(id, updateSensorDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: SensorDto })
  @ApiNotFoundResponse()
  remove(@Param('id') id: string): Observable<SensorDto> {
    return this.demoApiSensorsApiService.remove(id);
  }
}
