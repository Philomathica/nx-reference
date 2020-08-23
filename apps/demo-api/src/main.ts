/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { HttpExceptionFilter, TimeoutInterceptor } from '@nx-reference/shared/api';
import { ConfigType } from '@nestjs/config';

import { AppModule } from './app/app.module';
import appConfig from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const options = new DocumentBuilder().setTitle('Demo api').setDescription('Demo api application').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, options);
  const appConfiguration: ConfigType<typeof appConfig> = app.get(appConfig.KEY);

  SwaggerModule.setup(appConfiguration.swaggerPath, app, document);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  app.setGlobalPrefix(appConfiguration.globalPathPrefix);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalInterceptors(new TimeoutInterceptor());

  await app.listen(appConfiguration.port, () => {
    Logger.log('Listening at http://localhost:' + appConfiguration.port + '/' + appConfiguration.globalPathPrefix);
  });
}

bootstrap();
