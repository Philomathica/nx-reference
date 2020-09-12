import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedSensorsDataAccessModule } from '@nx-reference/shared/sensors/data-access';
import { SharedSensorsUiModule } from '@nx-reference/shared/sensors/ui';

import { SensorDetailsComponent } from './sensor-details/sensor-details.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: SensorDetailsComponent }];

@NgModule({
  imports: [CommonModule, SharedSensorsUiModule, SharedSensorsDataAccessModule, RouterModule.forChild(routes)],
  declarations: [SensorDetailsComponent],
})
export class DemoAngularSensorsFeatureSensorDetailsModule {}
