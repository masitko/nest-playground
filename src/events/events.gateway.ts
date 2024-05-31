import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';

import { from, Observable } from 'rxjs';
import { Server } from 'socket.io';
import { map } from 'rxjs/operators';
import { ConfigService } from '@nestjs/config';

import type { mouseEvent, mouseEventResponse } from './events.types';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventsGateway {
  @WebSocketServer()
  server: Server;

  constructor(private configService: ConfigService) {}

  @SubscribeMessage('mouse-event')
  async captureMouse(
    @MessageBody() data: mouseEvent,
  ): Promise<mouseEventResponse> {
    console.log(data);
    const response: mouseEventResponse = { ...data, status: 'received' };
    return response;
  }

  @SubscribeMessage('events')
  findAll(@MessageBody() data: any): Observable<WsResponse<number>> {
    console.log(this.configService.get('MONGO_INITDB_ROOT_USERNAME'));
    console.log(data);
    return from([1, 2, 3]).pipe(
      map((item) => ({ event: 'events', data: item })),
    );
  }

  @SubscribeMessage('identity')
  async identity(@MessageBody() data: number): Promise<number> {
    return data;
  }
}
