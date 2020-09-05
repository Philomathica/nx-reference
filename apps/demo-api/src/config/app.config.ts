import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  environment: process.env.NODE_ENV || 'development',
  port: +process.env.PORT || 3333,
  globalPathPrefix: 'api',
  swaggerPath: 'docs',
  database: {
    uri: process.env.DATABASE_SENSORS_URI,
  },
}));
