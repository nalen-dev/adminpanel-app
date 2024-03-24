import { Logger } from '@nestjs/common';
import { PrismaClient, Product, ProductCategory } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  const totalSeed = 20;

  const products: Product[] = [];

  await prisma.product.deleteMany({});

  for (let index = 0; index < totalSeed; index++) {
    const product: Product = {
      id: faker.number.int({ max: 1000 }),
      name: `product ${faker.word.sample()}`,
      stock: faker.number.int({ min: 20, max: 50 }),
      price: faker.number.int({ min: 5000, max: 50000 }),
      category: faker.helpers.enumValue(ProductCategory),
      cratedAt: new Date(),
      updatedAt: new Date(),
    };

    products.push(product);
  }

  try {
    Logger.log('sedding products');
    await prisma.product.createMany({ data: products });
    Logger.log('sedding products success');
  } catch (error) {
    throw error('sedding error', error);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
