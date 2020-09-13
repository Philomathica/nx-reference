import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';

import { SensorInfoStore } from './sensor-info.store';

@Component({
  selector: 'demo-sensor-info',
  templateUrl: './sensor-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SensorInfoStore],
})
export class SensorInfoComponent {
  sensor$: Observable<Sensor> = this.sensorsStore.sensor$;
  loading$: Observable<boolean> = this.sensorsStore.loading$;

  constructor(private readonly sensorsStore: SensorInfoStore) {}
}
