import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ProjectListComponent } from './project-list.component';
import { ProjectListModule } from './project-list.module';

describe('ProjectListComponent', () => {
  let spectator: Spectator<ProjectListComponent>;
  const createComponent = createComponentFactory({
    component: ProjectListComponent,
    imports: [ProjectListModule],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
