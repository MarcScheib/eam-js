import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsApiService } from '@eam-js/projects/data-access';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ProjectOverviewComponent } from './project-overview.component';
import { ProjectOverviewModule } from './project-overview.module';

describe('ProjectOverviewComponent', () => {
  let spectator: Spectator<ProjectOverviewComponent>;
  const createComponent = createComponentFactory({
    component: ProjectOverviewComponent,
    imports: [RouterTestingModule, ProjectOverviewModule],
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
