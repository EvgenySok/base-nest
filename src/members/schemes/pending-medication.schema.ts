import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Base } from 'src/members/schemes/base.schema';
import { Member } from 'src/members/schemes/members.schema';

@Schema({ discriminatorKey: 'kind' })
export class PendingMedication extends Base {
  @Prop({ name: 'rx_id', unique: true, required: true })
  rxId: string;

  @Prop({ name: 'shared_id', required: true })
  sharedId: string;

  @Prop({ name: 'name' })
  name: string;

  @Prop({ name: 'priority' })
  priority: string;

  @Prop({ name: 'request_type' })
  requestType: string;

  @Prop({ name: 'request_reason' })
  requestReason: string;

  @Prop({ name: 'status' })
  status: string;

  @Prop({ name: 'status_reason' })
  statusReason: string;

  @Prop({ name: 'claim_date' })
  claimDate: Date;

  @Prop({ name: 'content_description' })
  contentDescription: string;

  @Prop({ name: 'content_priority' })
  contentPriority: string;

  // @Prop({ type: SchemaTypes.ObjectId, ref: 'Member', required: true })
  // member: Member;
}

export const PendingMedicationSchema =
  SchemaFactory.createForClass(PendingMedication);
