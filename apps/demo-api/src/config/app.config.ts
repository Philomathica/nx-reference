import { registerAs } from '@nestjs/config';

export default () => ({
  environment: process.env.NODE_ENV || 'development',
  port: +process.env.PORT || 3333,
  globalPathPrefix: 'api',
  swaggerPath: 'docs',
  database: {
    uri: process.env.DATABASE_URI,
  },
});
