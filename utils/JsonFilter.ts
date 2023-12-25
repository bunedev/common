import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
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
  equals?: GraphQLJSONObject;


  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  not?: GraphQLJSONObject;
}