import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';

import { SensorStore } from './sensor.store';

@Component({
  selector: 'demo-sensor-details',
  templateUrl: './sensor-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SensorStore],
})
export class SensorDetailsComponent {
  sensor$: Observable<Sensor> = this.sensorsStore.sensor$;
  loading$: Observable<boolean> = this.sensorsStore.loading$;

  constructor(private readonly sensorsStore: SensorStore) {}
}
