import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData,
} from '@eam-js/components/confirmation-dialog';
import { Project } from '@eam-js/projects/api';
import { ProjectsService } from '@eam-js/projects/data-access';
import { map, share, switchMap } from 'rxjs/operators';

@Component({
  selector: 'view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewProjectComponent {
  project$ = this.route.paramMap.pipe(
    map(params => params.get('id')),
    switchMap(id => this.projectsService.getByKey(id)),
    share()
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly dialogSvc: MatDialog,
    private readonly projectsService: ProjectsService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  private _goToOverview() {
    this.router.navigate(['..'], {
      relativeTo: this.activatedRoute,
    });
  }

  delete(project: Project) {
    this.dialogSvc
      .open<ConfirmationDialogComponent, ConfirmationDialogData, boolean>(
        ConfirmationDialogComponent,
        {
          data: {
            title: 'Delete Project',
            message: `Are you sure you want to delete the project '${project.name}'?`,
          },
        }
      )
      .afterClosed()
      .subscribe(confirmed => {
        if (confirmed) {
          this.projectsService.delete(project).subscribe(
            () => this._goToOverview(),
            err => console.log(err)
          );
        }
      });
  }
}
