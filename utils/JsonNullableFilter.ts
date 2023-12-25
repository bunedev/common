import type { JsonValue } from "type-fest";
import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class JsonNullableFilter {
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  equals?: JsonValue;

  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  not?: JsonValue;
}