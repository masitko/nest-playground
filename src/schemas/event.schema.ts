import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop()
  x: number;

  @Prop()
  y: number;

  @Prop()
  type: string;

  @Prop()
  createdAt: Date;

  // @Prop()
  // data: Record<string, any>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
