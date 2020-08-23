import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { SharedApiHealthController } from './controllers/shared-api-health.controller';

@Module({
  imports: [TerminusModule],
  controllers: [SharedApiHealthController],
})
export class SharedApiModule {}
