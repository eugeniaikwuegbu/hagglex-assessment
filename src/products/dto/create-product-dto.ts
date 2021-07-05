import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class ProductType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly title: string;
  @Field()
  readonly desc: string;
  @Field(() => Int)
  readonly imageSize: number;
}
