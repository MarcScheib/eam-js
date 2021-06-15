import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProjectDto } from '@eam-js/projects/api';

@Component({
  selector: 'project-description',
  templateUrl: './project-description.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDescriptionComponent {
  @Input() project: ProjectDto;
}
