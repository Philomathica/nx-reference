import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { SensorEntity } from './entities';
import { CreateSensorDto } from './dto';
import { SensorDto } from './dto/sensor.dto';

@Injectable()
export class DemoApiSensorsApiService {
  constructor(
    @InjectModel(SensorEntity.name)
    private readonly sensorModel: Model<SensorEntity>
  ) {}

  findAll(): Observable<SensorDto[]> {
    return from(this.sensorModel.find().exec()).pipe(map(this.mapToSensorList));
  }

  create(createSensorDto: CreateSensorDto): Observable<SensorDto> {
    return from(new this.sensorModel(createSensorDto).save()).pipe(
      map(this.mapToSensor)
    );
  }

  private mapToSensorList(sensorEntities: SensorEntity[]): SensorDto[] {
    return plainToClass(SensorDto, sensorEntities);
  }

  private mapToSensor(sensorEntities: SensorEntity): SensorDto {
    return plainToClass(SensorDto, sensorEntities);
  }
}
