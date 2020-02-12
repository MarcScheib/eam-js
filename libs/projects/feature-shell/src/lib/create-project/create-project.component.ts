import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '@eam-js/projects/api';
import { ProjectsService } from '@eam-js/projects/data-access';
import { DataServiceError } from '@ngrx/data';
import { Subject } from 'rxjs';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProjectComponent {
  loading$ = this.projectsService.loading$;
  error$ = new Subject<string>();

  createProjectForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly projectsService: ProjectsService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  create() {
    if (!this.createProjectForm.valid) {
      return;
    }

    this.projectsService.add(this.createProjectForm.value).subscribe(
      project => this._goToProject(project),
      err => this.error$.next(getErrorMessage(err))
    );
  }

  private _goToProject(project: Project) {
    this.router.navigate(['..', project.id], {
      relativeTo: this.activatedRoute,
    });
  }
}

function getErrorMessage(err: DataServiceError): string {
  if (err.message) {
    return err.message;
  }

  return 'An error occurred.';
}
