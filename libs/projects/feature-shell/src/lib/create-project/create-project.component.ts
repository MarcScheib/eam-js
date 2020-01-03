import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  createProjectForm: FormGroup;

  constructor(
    readonly formBuilder: FormBuilder,
    private readonly projectsService: ProjectsService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.createProjectForm = formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  create() {
    if (!this.createProjectForm.valid) {
      return;
    }

    this.projectsService
      .add(this.createProjectForm.value)
      .subscribe(
        () => this.goToParent(),
        err => this.error$.next(getErrorMessage(err))
      );
  }

  private goToParent() {
    this.router.navigate(['..'], { relativeTo: this.activatedRoute });
  }
}

function getErrorMessage(err: DataServiceError): string {
  if (err.message) {
    return err.message;
  }

  return 'An error occurred.';
}
