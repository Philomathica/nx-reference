import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToClass } from 'class-transformer';
import { Model } from 'mongoose';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { PaginationQueryDto } from '@nx-reference/shared/api/core';

import { SensorEntity } from './entities';
import { CreateSensorDto, SensorDto, UpdateSensorDto } from './dto';

@Injectable()
export class DemoApiSensorsApiService {
  constructor(
    @InjectModel(SensorEntity.name)
    private readonly sensorModel: Model<SensorEntity>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto): Observable<SensorDto[]> {
    const { pageSize: limit, pageIndex: offset } = paginationQuery;

    return from(
      this.sensorModel
        .find()
        .skip(offset * limit)
        .limit(limit)
        .sort('name')
        .exec(),
    ).pipe(map(this.mapToSensorList));
  }

  findOne(id: string): Observable<SensorDto> {
    return from(this.sensorModel.findOne({ _id: id }).exec()).pipe(
      tap(this.handleNotFound),
      map((sensor) => this.mapToSensor(sensor)),
    );
  }

  create(createSensorDto: CreateSensorDto): Observable<SensorDto> {
    return from(new this.sensorModel(createSensorDto).save()).pipe(map(this.mapToSensor));
  }

  update(id: string, updateCoffeeDto: UpdateSensorDto): Observable<SensorDto> {
    return from(this.sensorModel.findOneAndUpdate({ _id: id }, { $set: updateCoffeeDto }, { new: true }).exec()).pipe(
      tap(this.handleNotFound),
      map((sensor) => this.mapToSensor(sensor)),
    );
  }

  remove(id: string): Observable<SensorDto> {
    return from(this.sensorModel.findOneAndDelete({ _id: id }).exec()).pipe(
      tap(this.handleNotFound),
      map((sensor) => this.mapToSensor(sensor)),
    );
  }

  private mapToSensorList(sensorEntities: SensorEntity[]): SensorDto[] {
    return plainToClass<SensorDto, SensorEntity>(SensorDto, sensorEntities);
  }

  private mapToSensor(sensorEntities: SensorEntity): SensorDto {
    return plainToClass<SensorDto, SensorEntity>(SensorDto, sensorEntities);
  }

  private handleNotFound(sensorEntity: SensorEntity): void {
    if (sensorEntity === null) {
      throw new NotFoundException(`Sensor not found`);
    }
  }
}
