import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ProjectDto } from '@eam-js/projects/api';

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent {
  @Input() loading = false;
  @Input() projects: ProjectDto[];

  @Output() delete = new EventEmitter<ProjectDto>();

  displayedColumns = ['ative', 'name', 'actions'];

  deleteProject(project: ProjectDto) {
    this.delete.emit(project);
  }
}
