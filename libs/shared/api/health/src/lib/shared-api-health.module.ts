import { Module } from '@nestjs/common';

import { SharedApiHealthController } from './shared-api-health.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [TerminusModule],
  controllers: [SharedApiHealthController],
  providers: [],
  exports: [],
})
export class SharedApiHealthModule {}
