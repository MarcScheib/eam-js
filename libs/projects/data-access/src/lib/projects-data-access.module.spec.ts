import { TestBed, waitForAsync } from '@angular/core/testing';
import { ProjectsDataAccessModule } from './projects-data-access.module';

describe('ProjectsDataAccessModule', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ProjectsDataAccessModule],
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ProjectsDataAccessModule).toBeDefined();
  });
});
