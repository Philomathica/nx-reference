import { Test } from '@nestjs/testing';
import { SharedApiHealthController } from './shared-api-health.controller';

describe('SharedApiHealthController', () => {
  let controller: SharedApiHealthController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [SharedApiHealthController],
    }).compile();

    controller = module.get(SharedApiHealthController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
