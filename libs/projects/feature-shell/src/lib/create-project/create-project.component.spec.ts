import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsService } from '@eam-js/projects/data-access';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { CreateProjectComponent } from './create-project.component';
import { CreateProjectModule } from './create-project.module';

describe('CreateProjectComponent', () => {
  let spectator: Spectator<CreateProjectComponent>;
  const createComponent = createComponentFactory({
    component: CreateProjectComponent,
    imports: [RouterTestingModule, CreateProjectModule],
    mocks: [ProjectsService],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
