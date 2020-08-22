import { Test } from '@nestjs/testing';
import { DemoApiSensorsApiController } from './demo-api-sensors-api.controller';
import { DemoApiSensorsApiService } from './demo-api-sensors-api.service';

describe('DemoApiSensorsApiController', () => {
  let controller: DemoApiSensorsApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DemoApiSensorsApiService],
      controllers: [DemoApiSensorsApiController],
    }).compile();

    controller = module.get(DemoApiSensorsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
