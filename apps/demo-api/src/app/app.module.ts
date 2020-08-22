import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigType, ConfigService } from '@nestjs/config';

import { DemoApiSensorsApiModule } from '@nx-reference/demo-api/sensors/api';
import { SharedApiModule } from '@nx-reference/shared/api';

import appConfig from '../config/app.config';

@Module({
  imports: [
    DemoApiSensorsApiModule,
    SharedApiModule,
    ConfigModule.forRoot({
      load: [appConfig],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('database.uri'),
      }),
    }),
  ],
})
export class AppModule {}
