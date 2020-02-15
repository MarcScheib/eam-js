import { async, TestBed } from '@angular/core/testing';
import { AuthDataAccessModule } from './auth-data-access.module';

describe('AuthDataAccessModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AuthDataAccessModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AuthDataAccessModule).toBeDefined();
  });
});
