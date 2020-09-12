import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { SensorRoutes } from '@nx-reference/demo-angular/sensors/util';

const routes: Route[] = [
  {
    path: SensorRoutes.sensors,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@nx-reference/demo-angular/sensors/feature-sensor-overview').then((module) => module.DemoAngularSensorsFeatureSensorOverviewModule),
      },
      {
        path: `:${SensorRoutes.sensorId}`,
        loadChildren: () =>
          import('@nx-reference/demo-angular/sensors/feature-sensor-details').then((module) => module.DemoAngularSensorsFeatureSensorDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DemoAngularSensorsFeatureShellModule {}
