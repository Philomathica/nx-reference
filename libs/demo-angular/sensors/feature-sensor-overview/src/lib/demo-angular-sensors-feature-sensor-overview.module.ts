import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { SharedSensorsFeatureSensorListModule } from '@nx-reference/shared/sensors/feature-sensor-list';

import { SensorOverviewPageComponent } from './sensor-overview-page/sensor-overview-page.component';

const routes: Route[] = [{ path: '', component: SensorOverviewPageComponent }];

@NgModule({
  imports: [CommonModule, SharedSensorsFeatureSensorListModule, RouterModule.forChild(routes)],
  declarations: [SensorOverviewPageComponent],
})
export class DemoAngularSensorsFeatureSensorOverviewModule {}
