import { Controller, Body, Post, Get, Query, InternalServerErrorException } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductInput } from './inputs/product.input';

@Controller('products')
export class ProductsController {
  constructor ( private readonly productService: ProductsService) {}
  @Post()
  async addProduct(@Body() productInput: ProductInput): Promise<any> {
    try{
      return await this.productService.create(productInput);
    }catch (e) {
      throw new InternalServerErrorException()
    }
  }

  @Get()
  getAllProducts() {
    try{
      return this.productService.findAll();
    }catch(e) {
      throw new InternalServerErrorException()
    }
  }
  @Get('/find')
  async find(
    @Query('title') title,
    @Query('desc') desc,
    @Query('imageSize') imageSize
  ) {
    try{
      return this.productService.findOneProduct(title,desc,imageSize)
    }catch (e) {
      throw new InternalServerErrorException()
    }
  }
}
