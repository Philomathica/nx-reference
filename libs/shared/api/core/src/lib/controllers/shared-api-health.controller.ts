import { Controller, Get } from '@nestjs/common';
import { HealthCheck, MongooseHealthIndicator, HealthCheckService } from '@nestjs/terminus';

@Controller('health')
export class SharedApiHealthController {
  constructor(private readonly health: HealthCheckService, private readonly mongoose: MongooseHealthIndicator) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([() => this.mongoose.pingCheck('demo-db')]);
  }
}
