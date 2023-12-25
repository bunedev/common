import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType({
  isAbstract: true,
  description: undefined,
})
export class BooleanNullableFilter {

  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  equals?: boolean | null;


  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  @Type(() => Boolean)
  not?: boolean | null;
}