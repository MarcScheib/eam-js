import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '@eam-js/projects/data-access';

@Component({
  selector: 'create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateProjectComponent {
  createProjectForm: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private readonly projectsService: ProjectsService
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

    this.projectsService.add(this.createProjectForm.value);
  }
}
