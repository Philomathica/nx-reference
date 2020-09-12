import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class RequestLoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request: FastifyRequest = context.switchToHttp().getRequest();
    const now = Date.now();

    return next
      .handle()
      .pipe(tap(() => Logger.log(`${request.raw.method} ${request.raw.url} took ${Date.now() - now}ms`, RequestLoggingInterceptor.name)));
  }
}
