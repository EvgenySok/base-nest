import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MembersService } from 'src/members/members.service';
import { Member } from 'src/members/schemes/members.schema';
import { PendingMedication } from 'src/members/schemes/pending-medication.schema';

@Controller('member')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post('/member')
  createMember(@Body() createDto: Member) {
    return this.membersService.createMember(createDto);
  }

  @Post('/pm')
  createPM(@Body() createDto: PendingMedication) {
    return this.membersService.createPM(createDto);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.membersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMenuDto) {
    return this.membersService.update(id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.membersService.remove(id);
  }
}
