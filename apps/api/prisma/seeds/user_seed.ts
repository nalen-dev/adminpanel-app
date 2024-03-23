import { Logger } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync('1234', salt);

  const adminInsert: User[] = [
    { id: 1, username: 'admin1', password: hash, role: 'super' },
    { id: 2, username: 'admin2', password: hash, role: 'moderator' },
    { id: 3, username: 'admin3', password: hash, role: 'main' },
  ];

  try {
    Logger.log('sedding user');
    const createMany = await prisma.user.createMany({ data: adminInsert });
    Logger.log('sedding user success');
  } catch (error) {
    throw error('sedding error', error);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
