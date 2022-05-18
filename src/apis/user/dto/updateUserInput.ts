import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  name: string;

  @Field(()=> String)
  profileImage: string;

  @Field(() => String)
  address: string;

}