import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersController } from 'src/members/members.controller';
import { MembersService } from 'src/members/members.service';
import { Member, MembersSchema } from 'src/members/schemes/members.schema';
import {
  PendingMedication,
  PendingMedicationSchema,
} from 'src/members/schemes/pending-medication.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Member.name, schema: MembersSchema },
      { name: PendingMedication.name, schema: PendingMedicationSchema },
    ]),
  ],
  controllers: [MembersController],
  providers: [MembersService],
  exports: [MembersService],
})
export class MembersModule {}
