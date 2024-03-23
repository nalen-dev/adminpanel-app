import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { UpdateProductDto } from './dto/update-product-dto';
import { CreateProductDto } from './dto/create-product-dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getALlProducts(@Query('page') page: string): any {
    try {
      if (page) {
        //todo: create filtering
        const skip = Number(page) * 10;
        return this.productService.findFilter(skip);
      }
      return this.productService.findAll();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Post()
  @UsePipes(new ValidationPipe())
  addProduct(@Body() body: CreateProductDto) {
    return this.productService.createProduct(body);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateProdctById(@Param('id') id: string, @Body() body: UpdateProductDto) {
    return this.productService.updateProduct(body, Number(id));
  }

  @Delete(':id')
  deleteProductById(@Param('id') id: string) {
    return this.productService.deleteProduct({ id: Number(id) });
  }
}
