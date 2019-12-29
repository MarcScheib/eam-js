import { Project } from '@eam-js/projects/api';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { TimestampEntity } from '../shared/timestamp.entity';

@Entity()
export class ProjectEntity extends TimestampEntity implements Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  @Index()
  name: string;

  @Column({ length: 255 })
  description: string;

  @Column({
    type: 'boolean',
    default: () => true,
  })
  isActive: boolean;
}
