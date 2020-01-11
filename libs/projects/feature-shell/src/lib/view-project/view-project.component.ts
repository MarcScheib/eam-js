import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '@eam-js/projects/data-access';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewProjectComponent {
  project$ = this.route.paramMap.pipe(
    map(params => params.get('id')),
    switchMap(id => this.projectsService.getByKey(id))
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly projectsService: ProjectsService
  ) {}
}
