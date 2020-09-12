import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, filter, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';
import { selectRouteParam } from '@nx-reference/shared/custom-router/data-access';
import { isNotNullOrUndefined } from '@nx-reference/shared/util/typescript';
import { SensorRoutes } from '@nx-reference/demo-angular/sensors/util';
import { SensorsService } from '@nx-reference/shared/sensors/data-access';

export interface SensorState {
  sensor: Sensor | null;
  loading: boolean;
}

const initialState: SensorState = { sensor: null, loading: false };

@Injectable()
export class SensorStore extends ComponentStore<SensorState> {
  // Selectors
  readonly sensorId$: Observable<string> = this.store.select(selectRouteParam(SensorRoutes.sensorId)).pipe(filter(isNotNullOrUndefined));
  readonly sensor$: Observable<Sensor> = this.select((state) => state.sensor).pipe(filter(isNotNullOrUndefined));

  readonly loading$: Observable<boolean> = this.select((state) => state.loading);

  // Updaters
  readonly setSensor = this.updater((state, sensor: Sensor) => ({ ...state, sensor: { ...sensor } }));
  readonly setLoading = this.updater((state, loading: boolean) => ({ ...state, loading }));

  constructor(private readonly sensorsService: SensorsService, private readonly store: Store) {
    super(initialState);

    // Effects
    this.effect((sensorId$: Observable<string>) =>
      sensorId$.pipe(
        filter(isNotNullOrUndefined),
        tap(() => this.setLoading(true)),
        switchMap((sensorId) =>
          this.sensorsService.fetchSensor(sensorId).pipe(
            tap({ next: (sensor) => this.setSensor(sensor), error: (error) => console.error(error) }),
            catchError(() => EMPTY),
          ),
        ),
        tap(() => this.setLoading(false)),
      ),
    )(this.sensorId$);
  }
}
