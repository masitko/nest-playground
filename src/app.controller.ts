import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventsService } from './events/events.service';
import { Event } from './schemas/event.schema';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly eventsService: EventsService,
  ) {}

  // @Get()
  // getHello(): string {
  //   console.log(this.appService);
  //   return this.appService.getHello();
  // }

  @Get()
  async getEvents(): Promise<Event[]> {
    // console.log(this.appService);
    return this.eventsService.findAll();
  }
}
