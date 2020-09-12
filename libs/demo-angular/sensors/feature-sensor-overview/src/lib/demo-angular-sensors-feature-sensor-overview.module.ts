import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedSensorsDataAccessModule } from '@nx-reference/shared/sensors/data-access';
import { SharedSensorsUiModule } from '@nx-reference/shared/sensors/ui';
import { Route, RouterModule } from '@angular/router';
import { SensorOverviewComponent } from './sensor-overview/sensor-overview.component';

const routes: Route[] = [{ path: '', component: SensorOverviewComponent }];

@NgModule({
  imports: [CommonModule, SharedSensorsUiModule, SharedSensorsDataAccessModule, RouterModule.forChild(routes)],
  declarations: [SensorOverviewComponent],
})
export class DemoAngularSensorsFeatureSensorOverviewModule {}
