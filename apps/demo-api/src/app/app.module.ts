import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { EventSourcingModule } from 'event-sourcing-nestjs';

import { DemoApiSensorsApiModule } from '@nx-reference/demo-api/sensors/api';
import { SharedApiModule } from '@nx-reference/shared/api';

import appConfig from '../config/app.config';

@Module({
  imports: [
    DemoApiSensorsApiModule,
    SharedApiModule,
    ConfigModule.forRoot({
      load: [appConfig],
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      inject: [appConfig.KEY],
      useFactory: (appConfiguration: ConfigType<typeof appConfig>) => ({ uri: appConfiguration.database.uri }),
    }),
    EventSourcingModule.forRoot({
      mongoURL: 'mongodb://localhost:27017/eventstore',
    }),
  ],
})
export class AppModule {}
