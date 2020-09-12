import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';

import { PaginationQuery } from '@nx-reference/shared/api/interfaces';

export class PaginationQueryDto implements PaginationQuery {
  @ApiPropertyOptional({ default: 100 })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  pageSize?: number = 100;

  @ApiPropertyOptional()
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  pageQuery?: number;
}
