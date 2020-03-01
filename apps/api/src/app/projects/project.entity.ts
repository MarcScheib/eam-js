import { CrudValidationGroups } from '@nestjsx/crud';
import {
  IsBoolean,
  IsDefined,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../base-entity';
import { User } from '../users/user.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('projects')
export class Project extends BaseEntity {
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  name: string;

  @IsOptional({ always: true })
  @Column({ type: 'text', nullable: true })
  description: string;

  @IsOptional({ always: true })
  @IsBoolean({ always: true })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @OneToOne(_ => User)
  @JoinColumn()
  creator: User;
}
