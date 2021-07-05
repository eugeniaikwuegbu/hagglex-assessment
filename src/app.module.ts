import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ProductsModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql'}),
    MongooseModule.forRoot('mongodb+srv://nest-project-api:hello1234@cluster0.jtim5.mongodb.net/nestjs-demo?retryWrites=true&w=majority'),
    // CacheModule.register({ ttl: 5, max: 10}),
  ],
  controllers: [ProductsController],
  providers: [ProductsService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CacheInterceptor,
    // },
  ],
})
export class AppModule {}
