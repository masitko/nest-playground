import { Test, TestingModule } from '@nestjs/testing';
import { EventsGateway } from './events.gateway';
import { ConfigService } from '@nestjs/config';

import type { mouseEvent, mouseEventResponse } from './events.types';

describe('EventsGateway', () => {
  let gateway: EventsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventsGateway, ConfigService],
    }).compile();

    gateway = module.get<EventsGateway>(EventsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('captureMouse', () => {
    it('should return the data with added status received', async () => {
      const data: mouseEvent = { x: 1, y: 2, type: 'test' };
      const result: mouseEventResponse = await gateway.captureMouse(data);
      expect(result).toEqual({ ...data, status: 'received' });
    });
  });
});
