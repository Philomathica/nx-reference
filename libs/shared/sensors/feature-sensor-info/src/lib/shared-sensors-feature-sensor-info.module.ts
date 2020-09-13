import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedSensorsDataAccessModule } from '@nx-reference/shared/sensors/data-access';
import { SharedSensorsUiModule } from '@nx-reference/shared/sensors/ui';

import { SensorInfoComponent } from './sensor-info/sensor-info.component';

@NgModule({
  imports: [CommonModule, SharedSensorsUiModule, SharedSensorsDataAccessModule],
  declarations: [SensorInfoComponent],
  exports: [SensorInfoComponent],
})
export class SharedSensorsFeatureSensorInfoModule {}
