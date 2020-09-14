import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

import { Sensor } from '@nx-reference/demo-api/sensors/interfaces';

import { SensorListStore } from './sensor-list.store';

@Component({
  selector: 'demo-sensor-list',
  templateUrl: './sensor-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SensorListStore],
})
export class SensorListComponent {
  sensors$: Observable<Sensor[]> = this.sensorsStore.sensors$;
  loading$: Observable<boolean> = this.sensorsStore.loading$;
  pageIndex$: Observable<number> = this.sensorsStore.pageIndex$;

  @Input() set pageSize(value: number) {
    if (value > 0) {
      this.sensorsStore.setPageSize(value);
    }
  }

  @Input() set pageIndex(value: number) {
    if (value >= 0) {
      this.sensorsStore.setPageIndex(value);
    }
  }

  constructor(private readonly sensorsStore: SensorListStore) {}
}
