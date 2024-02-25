import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class JsonFilter {
 
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  equals?: typeof GraphQLJSONObject;


  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  not?:typeof GraphQLJSONObject;
}