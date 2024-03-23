import {
  Body,
  Controller,
  ForbiddenException,
  NotFoundException,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { UsersService } from './users.service';
import { UserLoginDto } from './dto/user-login-dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async loginUser(@Body() body: UserLoginDto) {
    const user = await this.userService.userLogin(body);

    if (user == null) {
      throw new NotFoundException();
    }

    const isPasswordSame = await bcrypt.compare(body.password, user.password);
    if (isPasswordSame == false) {
      throw new ForbiddenException();
    }

    return user.role;
  }
}
