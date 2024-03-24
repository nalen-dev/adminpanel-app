import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  NotFoundException,
  Post,
  Put,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { UsersService } from './users.service';
import { UserLoginDto } from './dto/user-login-dto';
import { Response } from 'express';
import { UserUpdateDto } from './dto/user-update.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async loginUser(@Body() body: UserLoginDto, @Res() response: Response) {
    const user = await this.userService.userLogin(body);

    if (user == null) {
      throw new NotFoundException();
    }

    const isPasswordSame = await bcrypt.compare(body.password, user.password);
    if (isPasswordSame == false) {
      throw new ForbiddenException();
    }

    response.cookie('role', user.role);
    response.status(200).json({ message: 'login success' });
  }

  @Get()
  async getUserData() {
    return this.userService.findAllUser();
  }

  @Put()
  @UsePipes(new ValidationPipe())
  async updateUserData(@Body() body: UserUpdateDto) {
    return this.userService.userUpdate(body);
  }
}
