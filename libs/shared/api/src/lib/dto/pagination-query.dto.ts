import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationQueryDto {
  @ApiPropertyOptional({ default: 100 })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number = 100;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  offset?: number;
}
