import { Model } from 'mongoose';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/product.interface';
import { ProductInput } from './inputs/product.input';

@Injectable()
export class ProductsService {
  constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

  async create(createCatDto: ProductInput): Promise<Product> {
    try{
      const createdProduct = new this.productModel(createCatDto);
      return await createdProduct.save();
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async findAll(): Promise<Product[]> {
    try{
      return await this.productModel.find().exec();
    }catch(e){
      throw new InternalServerErrorException()
    }
  }

  async findOneProduct(title: string, desc: string, imageSize:number): Promise<Product[]> {
    let result;
    try{
      result = await this.productModel.findOne({ title, desc, imageSize }).exec();
    }catch(e) {
      throw new NotFoundException('Unable to find product')
    }
    if(!result) {
      throw new NotFoundException('Product not found')
    }
    return result
  }
}
