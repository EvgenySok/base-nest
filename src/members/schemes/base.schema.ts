import { Prop } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

export class Base extends Document {
  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}
