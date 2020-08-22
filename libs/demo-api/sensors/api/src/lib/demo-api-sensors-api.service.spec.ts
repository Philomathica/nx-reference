import { Test } from '@nestjs/testing';
import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';

describe('DemoApiSensorsApiService', () => {
  let service: DemoApiSensorsApiService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DemoApiSensorsApiService],
    }).compile();

    service = module.get(DemoApiSensorsApiService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
