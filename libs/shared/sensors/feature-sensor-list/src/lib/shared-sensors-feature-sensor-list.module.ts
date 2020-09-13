import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedSensorsDataAccessModule } from '@nx-reference/shared/sensors/data-access';
import { SharedSensorsUiModule } from '@nx-reference/shared/sensors/ui';

import { SensorListComponent } from './sensor-list/sensor-list.component';

@NgModule({
  imports: [CommonModule, SharedSensorsUiModule, SharedSensorsDataAccessModule, RouterModule],
  declarations: [SensorListComponent],
  exports: [SensorListComponent],
})
export class SharedSensorsFeatureSensorListModule {}
