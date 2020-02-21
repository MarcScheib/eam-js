import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '@eam-js/projects/api';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent {
  @Input() project: Project;
}
