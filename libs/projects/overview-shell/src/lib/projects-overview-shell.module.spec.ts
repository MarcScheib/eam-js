import { async, TestBed } from '@angular/core/testing';

import { ProjectsOverviewShellModule } from './projects-overview-shell.module';

describe('ProjectsOverviewShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ProjectsOverviewShellModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ProjectsOverviewShellModule).toBeDefined();
  });
});
