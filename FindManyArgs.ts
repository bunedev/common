import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
@ArgsType()
export class FindManyArgs {
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}