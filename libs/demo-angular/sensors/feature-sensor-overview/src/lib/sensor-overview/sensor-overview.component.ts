import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';

import { SensorsStore } from './sensors.store';

@Component({
  selector: 'demo-sensor-overview',
  templateUrl: './sensor-overview.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SensorsStore],
})
export class SensorOverviewComponent {
  sensors$: Observable<Sensor[]> = this.sensorsStore.sensors$;
  loading$: Observable<boolean> = this.sensorsStore.loading$;

  constructor(private readonly sensorsStore: SensorsStore) {}
}
