import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProjectDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @IsOptional()
  @MaxLength(100)
  name: string;

  @ApiProperty({ type: 'string' })
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty({ type: 'boolean' })
  @IsBoolean()
  @IsOptional()
  isActive: boolean;
}
