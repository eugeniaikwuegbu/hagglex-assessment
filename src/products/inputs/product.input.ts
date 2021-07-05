import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class ProductInput {
  @Field()
  readonly title: string;
  @Field()
  readonly desc: string;
  @Field(() => Int)
  readonly imageSize: number;
}
