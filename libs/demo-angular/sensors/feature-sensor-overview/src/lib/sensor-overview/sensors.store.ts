import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';
import { selectQueryParam } from '@nx-reference/shared/custom-router/data-access';
import { PaginationQuery } from '@nx-reference/shared/api/interfaces';
import { SharedRoutes } from '@nx-reference/shared/util/pagination';
import { SensorsService } from '@nx-reference/shared/sensors/data-access';

export interface SensorsState {
  sensors: Sensor[];
  loading: boolean;
}

const initialState: SensorsState = { sensors: [], loading: false };

const defaultPageSize = 20;

@Injectable()
export class SensorsStore extends ComponentStore<SensorsState> {
  // Selectors
  readonly sensors$: Observable<Sensor[]> = this.select((state) => state.sensors);

  readonly loading$: Observable<boolean> = this.select((state) => state.loading);
  readonly pageSize$: Observable<number> = this.store
    .select(selectQueryParam(SharedRoutes.pageSize))
    .pipe(map((pageSize) => (pageSize ? +pageSize : defaultPageSize)));
  readonly pageIndex$: Observable<number> = this.store
    .select(selectQueryParam(SharedRoutes.pageIndex))
    .pipe(map((pageIndex) => (pageIndex ? +pageIndex : 0)));

  private readonly fetchSensors$: Observable<PaginationQuery> = this.select(
    this.pageSize$,
    this.pageIndex$,
    (pageSize, pageIndex) => ({ pageSize, pageIndex }),
    { debounce: true },
  );

  // Updaters
  readonly setSensors = this.updater((state, sensors: Sensor[]) => ({ ...state, sensors: [...sensors] }));
  readonly setLoading = this.updater((state, loading: boolean) => ({ ...state, loading }));

  constructor(private readonly sensorsService: SensorsService, private readonly store: Store) {
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
