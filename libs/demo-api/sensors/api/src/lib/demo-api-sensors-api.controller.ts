import { Controller } from '@nestjs/common';
import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';

@Controller('demo-api-sensors-api')
export class DemoApiSensorsApiController {
  constructor(private demoApiSensorsApiService: DemoApiSensorsApiService) {}
}
