import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Member } from 'src/members/schemes/members.schema';
import { PendingMedication } from 'src/members/schemes/pending-medication.schema';

@Injectable()
export class MembersService implements OnModuleInit {
  constructor(
    @InjectModel(Member.name)
    private readonly membersModel: Model<Member>,
    @InjectModel(PendingMedication.name)
    private readonly pendingMedicationModel: Model<PendingMedication>,
  ) {}
  async onModuleInit() {
    console.log('console:', await this.membersModel.syncIndexes());
    console.log('console:', await this.membersModel.listIndexes());
  }

  async createMember(createDto): Promise<Member> {
    const query = { sharedId: createDto.sharedId };
    const update = createDto;
    const options = { new: true };

    return (
      (await this.membersModel.findOneAndUpdate(query, update, options)) ??
      (await new this.membersModel(createDto).save())
    );
  }

  async createPM(createDto): Promise<PendingMedication> {
    const query = { sharedId: createDto.sharedId };
    const update = createDto;
    const options = { new: true };

    const updated =
      (await this.pendingMedicationModel.findOneAndUpdate(
        query,
        update,
        options,
      )) ?? (await new this.pendingMedicationModel(createDto).save());

    return updated;
  }

  async findAll(): Promise<Member[]> {
    return this.membersModel.find();
  }

  findOne(id: string) {
    return this.membersModel.findById(id);
  }

  async update(id: string, updateMenuDto): Promise<Member> {
    return this.membersModel.findByIdAndUpdate(id, updateMenuDto);
  }

  async remove(id: string) {
    return this.membersModel.findByIdAndRemove(id);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
