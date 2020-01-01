import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(100)
  name: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  description: string;

  @ApiProperty({ type: 'boolean' })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
