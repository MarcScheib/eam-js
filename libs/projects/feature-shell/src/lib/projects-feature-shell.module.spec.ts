import { async, TestBed } from '@angular/core/testing';
import { ProjectsFeatureShellModule } from './projects-feature-shell.module';

describe('ProjectsFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProjectsFeatureShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProjectsFeatureShellModule).toBeDefined();
  });
});
