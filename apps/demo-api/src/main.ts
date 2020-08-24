import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { ConfigType } from '@nestjs/config';

import { AppModule } from './app/app.module';
import appConfig from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const options = new DocumentBuilder().setTitle('Demo api').setDescription('Demo api application').setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, options);
  const appConfiguration: ConfigType<typeof appConfig> = app.get(appConfig.KEY);

  // TODO: move to shared api
  SwaggerModule.setup(appConfiguration.swaggerPath, app, document);
  app.setGlobalPrefix(appConfiguration.globalPathPrefix);

  await app.listen(appConfiguration.port, () => {
    Logger.log('Listening at http://localhost:' + appConfiguration.port + '/' + appConfiguration.globalPathPrefix);
  });
}

bootstrap();
