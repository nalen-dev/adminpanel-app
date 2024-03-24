import { UserRole } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserUpdateDto {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  role: UserRole;
}
