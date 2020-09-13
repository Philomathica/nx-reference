import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DemoAngularSensorsFeatureShellModule } from '@nx-reference/demo-angular/sensors/feature-shell';
import { SharedCoreModule } from '@nx-reference/shared/core';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, SharedCoreModule, DemoAngularSensorsFeatureShellModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
