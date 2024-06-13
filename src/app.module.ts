import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { EventsService } from './events/events.service';

@Module({
  imports: [
    EventsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://root:example123@mongo/events?authSource=admin',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
