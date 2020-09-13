import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { PaginationQuery } from '@nx-reference/shared/api/interfaces';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';

@Injectable()
export class SensorsService {
  constructor(private readonly httpClient: HttpClient) {}

  fetchSensors(paginationQuery?: PaginationQuery): Observable<Sensor[]> {
    const options = {
      params: new HttpParams({
        fromObject: {
          ...(paginationQuery?.pageSize && { pageSize: paginationQuery.pageSize + '' }),
          ...(paginationQuery?.pageIndex && { pageIndex: paginationQuery.pageIndex + '' }),
        },
      }),
    };

    return this.httpClient.get<Sensor[]>('http://localhost:3333/api/sensors', options);
  }

  fetchSensor(id: string): Observable<Sensor> {
    return this.httpClient.get<Sensor>(`http://localhost:3333/api/sensors/${id}`);
  }
}
