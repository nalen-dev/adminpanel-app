import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserLoginDto } from './dto/user-login-dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async userLogin(user: UserLoginDto) {
    try {
      const userFound = await this.prisma.user.findFirst({
        where: { username: user.username },
      });

      return userFound;
    } catch (error) {}
  }
}
