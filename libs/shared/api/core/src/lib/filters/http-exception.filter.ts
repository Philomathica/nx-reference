import { Catch, HttpException, ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getResponse<FastifyRequest>();
    const response = ctx.getResponse<FastifyReply>();

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();
    const error = typeof response === 'string' ? { message: exceptionResponse } : (exceptionResponse as Record<string, unknown>);

    response.status(status).send({
      ...error,
      timestamp: new Date().toISOString(),
      statusCode: status,
      path: request.url,
    });
  }
}
