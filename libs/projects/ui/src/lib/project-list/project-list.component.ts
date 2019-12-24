import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '@eam-js/projects/api';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  @Input() projects: Project[];
}
