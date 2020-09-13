import { RequestLoggingInterceptor } from './logging.interceptor';

describe('RequestLoggingInterceptor', () => {
  it('should be defined', () => {
    expect(new RequestLoggingInterceptor()).toBeDefined();
  });
});
