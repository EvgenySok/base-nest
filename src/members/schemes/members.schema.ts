import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Base } from 'src/members/schemes/base.schema';
import { PendingMedication } from 'src/members/schemes/pending-medication.schema';

@Schema()
export class Member extends Base {
  @Prop({ required: true, default: undefined })
  sharedId: string;

  @Prop({ required: true, default: undefined })
  planName: string;

  @Prop({ nullable: true })
  isAdherent: boolean;

  @Prop()
  patientNumber: string;

  @Prop()
  personCode: string;

  @Prop({ nullable: true })
  isCcpdEligible: boolean;

  // @Prop({
  //   type: [SchemaTypes.ObjectId],
  //   ref: PendingMedication.name,
  // })
  // pendingMedications: PendingMedication[];
}

export const MembersSchema = SchemaFactory.createForClass(Member);

MembersSchema.index({ sharedId: 1, planName: 1 }, { unique: true });
MembersSchema.index({ sharedId: 1 }, { unique: true });
