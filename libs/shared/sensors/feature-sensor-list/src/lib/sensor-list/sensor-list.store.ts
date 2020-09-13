import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';
import { PaginationQuery } from '@nx-reference/shared/api/interfaces';
import { SensorsService } from '@nx-reference/shared/sensors/data-access';
import { isNotNullOrUndefined } from '@nx-reference/shared/util/typescript';

export interface SensorListState {
  sensors: Sensor[];
  loading: boolean;
  pageSize?: number;
  pageIndex?: number;
}

const initialState: SensorListState = { sensors: [], loading: false };

@Injectable()
export class SensorListStore extends ComponentStore<SensorListState> {
  // Selectors
  readonly sensors$: Observable<Sensor[]> = this.select((state) => state.sensors);
  readonly loading$: Observable<boolean> = this.select((state) => state.loading);
  readonly pageSize$: Observable<number> = this.select((state) => state.pageSize).pipe(filter(isNotNullOrUndefined));
  readonly pageIndex$: Observable<number> = this.select((state) => state.pageIndex).pipe(filter(isNotNullOrUndefined));

  private readonly fetchSensors$: Observable<PaginationQuery> = this.select(
    this.pageSize$,
    this.pageIndex$,
    (pageSize, pageIndex) => ({ pageSize, pageIndex }),
    { debounce: true },
  );

  // Updaters
  readonly setSensors = this.updater((state, sensors: Sensor[]) => ({ ...state, sensors: [...sensors] }));
  readonly setLoading = this.updater((state, loading: boolean) => ({ ...state, loading }));
  readonly setPageSize = this.updater((state, pageSize: number) => ({ ...state, pageSize }));
  readonly setPageIndex = this.updater((state, pageIndex: number) => ({ ...state, pageIndex }));

  constructor(private readonly sensorsService: SensorsService) {
    super(initialState);

    // Effects
    this.effect((paginationQuery$: Observable<PaginationQuery>) =>
      paginationQuery$.pipe(
        tap(() => this.setLoading(true)),
        switchMap((paginationQuery) =>
          this.sensorsService.fetchSensors({ pageSize: paginationQuery.pageSize, pageIndex: paginationQuery.pageIndex }).pipe(
            tap({ next: (sensors) => this.setSensors(sensors), error: (error) => console.error(error) }),
            catchError(() => EMPTY),
          ),
        ),
        tap(() => this.setLoading(false)),
      ),
    )(this.fetchSensors$);
  }
}
