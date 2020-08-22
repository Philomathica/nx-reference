import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  MongooseHealthIndicator,
  HealthCheckService,
} from '@nestjs/terminus';

@Controller('health')
export class SharedApiHealthController {
  constructor(
    private health: HealthCheckService,
    private mongoose: MongooseHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([() => this.mongoose.pingCheck('demo-db')]);
  }
}
