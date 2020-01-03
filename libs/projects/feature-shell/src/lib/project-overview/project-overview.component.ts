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
  loading$ = this.projectsService.loading$;
  projects$ = this.projectsService.entities$;

  constructor(private readonly projectsService: ProjectsService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.projectsService.getAll();
  }

  search() {
    console.log('search');
  }

  onDelete(project: Project) {
    this.projectsService.delete(project.id);
  }
}
