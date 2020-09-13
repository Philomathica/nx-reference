import { APP_PIPE, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { Module, ValidationPipe } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { SharedApiHealthController } from './controllers/shared-api-health.controller';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { RequestLoggingInterceptor, TimeoutInterceptor } from './interceptors';

@Module({
  imports: [TerminusModule],
  controllers: [SharedApiHealthController],
  providers: [
    { provide: APP_PIPE, useFactory: () => new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }) },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
    { provide: APP_INTERCEPTOR, useClass: TimeoutInterceptor },
    { provide: APP_INTERCEPTOR, useClass: RequestLoggingInterceptor },
  ],
})
export class SharedApiModule {}
