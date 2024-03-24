import { Injectable, Logger } from '@nestjs/common';
import { Prisma, PrismaClient, Product } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product-dto';
import { error } from 'console';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Product[]> {
    try {
      const products = await this.prisma.product.findMany({});
      return products;
    } catch (error) {
      Logger.error('prisma error: ', error);
      throw error(error);
    }
  }

  async findFilter(skip: number) {
    try {
      return this.prisma.product.findMany({
        take: 10,
        skip,
        orderBy: { cratedAt: 'asc' },
      });
    } catch (error) {}
  }

  async createProduct(product: CreateProductDto) {
    try {
      const result = await this.prisma.product.create({
        data: {
          name: product.name,
          category: product.category,
          stock: product.stock,
          price: product.price,
        },
        select: { id: true },
      });
      return result;
    } catch (error) {
      throw error(error);
    }
  }

  async updateProduct(product: UpdateProductDto, id: number) {
    try {
      const result = await this.prisma.product.update({
        where: { id },
        data: {
          name: product.name,
          category: product.category,
          stock: product.stock,
          price: product.price,
        },
        select: { id: true },
      });
      return result;
    } catch (error) {
      //todo
      //   if (error instanceof Prisma.PrismaClientKnownRequestError) {
      //     if (error.code == 'P2025') {
      //     }
      //   }
      throw new error('something wrong');
    }
  }

  async deleteProduct(id: Prisma.ProductWhereUniqueInput) {
    try {
      return await this.prisma.product.delete({ where: id });
    } catch (e) {
      throw new error(e);
    }
  }

  async findProductById(id: Prisma.ProductWhereUniqueInput) {
    try {
      return await this.prisma.product.findFirst({ where: id });
    } catch (e) {
      throw new error(e);
    }
  }
}
