import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Project } from '@eam-js/projects/api';

@Component({
  selector: 'project-description',
  templateUrl: './project-description.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDescriptionComponent {
  @Input() project: Project;
}
