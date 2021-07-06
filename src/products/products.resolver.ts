import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductType } from './dto/create-product-dto';
import { ProductInput } from './inputs/product.input';
import { ProductsService } from './products.service';
import { InternalServerErrorException } from '@nestjs/common';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productService: ProductsService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [ProductType])
  async products() {
    try {
      return this.productService.findAll();
    } catch(e) {
      throw new InternalServerErrorException();
    }
  }

  @Mutation(() => ProductType)
  async createProduct(@Args('input') input: ProductInput) {
    try{
      return this.productService.create(input);
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  @Query( () => ProductType )
  async findOneProduct(
    @Args('title') title:string,
    @Args('desc') desc:string,
    @Args('imageSize') imageSize:number
  ) {
    try{
      return this.productService.findOneProduct(title,desc, imageSize)
    }catch(e){
      throw new InternalServerErrorException()
    }
  }
}
