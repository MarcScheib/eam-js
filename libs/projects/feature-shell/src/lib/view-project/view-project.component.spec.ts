import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsApiService } from '@eam-js/projects/data-access';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ViewProjectComponent } from './view-project.component';
import { ViewProjectModule } from './view-project.module';

describe('ViewProjectComponent', () => {
  let spectator: Spectator<ViewProjectComponent>;
  const createComponent = createComponentFactory({
    component: ViewProjectComponent,
    imports: [RouterTestingModule, ViewProjectModule],
    mocks: [ProjectsApiService],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
