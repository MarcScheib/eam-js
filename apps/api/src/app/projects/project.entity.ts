import { Project } from '@eam-js/projects/api';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProjectEntity implements Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  @Index()
  name: string;

  @Column({ length: 255 })
  description: string;
}
