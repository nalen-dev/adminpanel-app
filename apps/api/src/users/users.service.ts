import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserLoginDto } from './dto/user-login-dto';
import { UserUpdateDto } from './dto/user-update.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async userLogin(user: UserLoginDto) {
    try {
      const userFound = await this.prisma.user.findFirst({
        where: { username: user.username },
      });

      return userFound;
    } catch (error) {
      throw error;
    }
  }

  async findAllUser() {
    try {
      return this.prisma.user.findMany({
        select: { password: false, username: true, role: true, id: true },
      });
    } catch (e) {
      throw e;
    }
  }

  async userUpdate(userUpdate: UserUpdateDto) {
    try {
      return this.prisma.user.update({
        where: { id: userUpdate.id },
        data: { username: userUpdate.username, role: userUpdate.role },
      });
    } catch (error) {
      throw error;
    }
  }
}
