import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData,
} from '@eam-js/components/confirmation-dialog';
import { ProjectDto } from '@eam-js/projects/api';
import { ProjectsApiService } from '@eam-js/projects/data-access';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.scss'],
})
export class ProjectOverviewComponent implements OnInit {
  loading$ = this.projectsApiService.loading$;
  projects$ = this.projectsApiService.entities$;

  constructor(
    private readonly dialogSvc: MatDialog,
    private readonly projectsApiService: ProjectsApiService
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.projectsApiService.getAll();
  }

  search() {
    console.log('search');
  }

  onDelete(project: ProjectDto) {
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
          this.projectsApiService.delete(project).subscribe({
            error: err => console.log(err),
          });
        }
      });
  }
}
