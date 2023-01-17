import { Controller, Get } from '@nestjs/common';
import { MembersService } from './members/members.service';

@Controller()
export class AppController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  getHello(): string {
    return this.membersService.getHello();
  }
}
