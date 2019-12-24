import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectsService } from '@eam-js/projects/data-access';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProjectComponent {
  constructor(private readonly projectsService: ProjectsService) {}

  create() {
    console.log('create project');
  }
}
