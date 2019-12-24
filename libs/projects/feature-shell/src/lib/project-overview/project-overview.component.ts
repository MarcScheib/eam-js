import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProjectsService } from '@eam-js/projects/data-access';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss'],
})
export class ProjectOverviewComponent implements OnInit {
  projects$ = this.projectsService.entities$;

  constructor(private readonly projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService.getAll();
  }

  create() {
    console.log('Create New Project');
  }
}
