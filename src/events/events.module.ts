import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Event, EventSchema } from '../schemas/event.schema';
import { EventsService } from './events.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }]),
  ],
  providers: [EventsGateway, EventsService],
  exports: [EventsService],
})
export class EventsModule {}
