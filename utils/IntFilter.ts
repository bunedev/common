import { Field, InputType, Int } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class IntFilter {
  
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  equals?: number;


  @IsOptional()
  @Field(() => [Int], {
    nullable: true,
  })
  @Type(() => Number)
  in?: number[];

  
  @IsOptional()
  @Field(() => [Int], {
    nullable: true,
  })
  @Type(() => Number)
  notIn?: number[];

 
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  lt?: number;

  
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  lte?: number;

 
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  gt?: number;


  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  gte?: number;

 
  @IsOptional()
  @Field(() => Int, {
    nullable: true,
  })
  @Type(() => Number)
  not?: number;
}