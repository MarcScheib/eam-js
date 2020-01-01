import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Project } from '@eam-js/projects/api';
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
    this.refresh();
  }

  refresh() {
    this.projectsService.getAll();
  }

  search() {
    console.log('serach');
  }

  onDelete(project: Project) {
    console.log(project);
    console.dir(this.projectsService);
    this.projectsService.delete(project.id);
  }
}
