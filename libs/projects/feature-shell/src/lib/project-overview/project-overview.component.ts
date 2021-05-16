import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData,
} from '@eam-js/components/confirmation-dialog';
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

  constructor(
    private readonly dialogSvc: MatDialog,
    private readonly projectsService: ProjectsService
  ) {}

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
          this.projectsService.delete(project).subscribe({
            error: err => console.log(err),
          });
        }
      });
  }
}
