import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDto, ProjectType } from '@eam-js/projects/api';
import { ProjectsApiService } from '@eam-js/projects/data-access';
import { DataServiceError } from '@ngrx/data';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProjectComponent implements OnInit {
  loading$ = this.projectsApiService.loading$;
  error$ = new Subject<string>();
  filteredOptions$: Observable<ProjectType[]>;

  options = Object.values(ProjectType);

  createProjectForm = this.formBuilder.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly projectsApiService: ProjectsApiService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.filteredOptions$ = this.createProjectForm
      .get('type')
      .valueChanges.pipe(
        startWith(''),
        map(value => (typeof value === 'string' ? value : value.name)),
        map(name => (name ? this._filter(name) : this.options.slice()))
      );
  }

  create() {
    if (!this.createProjectForm.valid) {
      return;
    }

    this.projectsApiService.add(this.createProjectForm.value).subscribe(
      project => this._goToProject(project),
      err => this.error$.next(getErrorMessage(err))
    );
  }

  private _goToProject(project: ProjectDto) {
    this.router.navigate(['..', project.id], {
      relativeTo: this.activatedRoute,
    });
  }

  displayFn(type: ProjectType): string {
    return type || '';
  }

  private _filter(name: string): ProjectType[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(
      option => option.toLowerCase().indexOf(filterValue) === 0
    );
  }
}

function getErrorMessage(err: DataServiceError): string {
  if (err.message) {
    return err.message;
  }

  return 'An error occurred.';
}
