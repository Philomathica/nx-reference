import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SensorsService } from './services/sensors.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SensorsService],
})
export class SharedSensorsDataAccessModule {}
