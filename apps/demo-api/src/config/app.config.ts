import { registerAs } from '@nestjs/config';

export default () => ({
  environment: process.env.NODE_ENV || 'development',
  database: {
    uri: process.env.DATABASE_URI,
  },
});
