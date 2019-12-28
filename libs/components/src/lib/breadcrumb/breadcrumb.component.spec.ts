import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbModule } from './breadcrumb.module';

describe('BreadcrumbComponent', () => {
  let spectator: Spectator<BreadcrumbComponent>;
  const createComponent = createComponentFactory({
    component: BreadcrumbComponent,
    imports: [BreadcrumbModule, RouterTestingModule],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
