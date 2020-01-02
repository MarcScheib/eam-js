import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Project } from '@eam-js/projects/api';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  @Input() loading = false;
  @Input() projects: Project[];

  @Output() delete = new EventEmitter<Project>();

  displayedColumns = ['ative', 'name', 'actions'];

  deleteProject(project: Project) {
    this.delete.emit(project);
  }
}
