import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';

import { SensorEntity } from './entities';
import { CreateSensorDto } from './dto';

@Injectable()
export class DemoApiSensorsApiService {
  constructor(
    @InjectModel(SensorEntity.name)
    private readonly sensorModel: Model<SensorEntity>
  ) {}

  findAll(): Observable<SensorEntity[]> {
    return from(this.sensorModel.find().exec());
  }

  create(createSensorDto: CreateSensorDto): Observable<SensorEntity> {
    return from(new this.sensorModel(createSensorDto).save());
  }
}
