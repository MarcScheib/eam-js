import { ProjectsService } from '@eam-js/projects/data-access';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ProjectOverviewComponent } from './project-overview.component';
import { ProjectOverviewModule } from './project-overview.module';

describe('ProjectOverviewComponent', () => {
  let spectator: Spectator<ProjectOverviewComponent>;
  const createComponent = createComponentFactory({
    component: ProjectOverviewComponent,
    imports: [ProjectOverviewModule],
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