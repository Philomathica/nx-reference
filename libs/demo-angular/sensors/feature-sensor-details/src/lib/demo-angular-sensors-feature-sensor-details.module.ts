import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { SharedSensorsFeatureSensorInfoModule } from '@nx-reference/shared/sensors/feature-sensor-info';

import { SensorDetailsPageComponent } from './sensor-details-page/sensor-details-page.component';

const routes: Route[] = [{ path: '', component: SensorDetailsPageComponent }];

@NgModule({
  imports: [CommonModule, SharedSensorsFeatureSensorInfoModule, RouterModule.forChild(routes)],
  declarations: [SensorDetailsPageComponent],
})
export class DemoAngularSensorsFeatureSensorDetailsModule {}
