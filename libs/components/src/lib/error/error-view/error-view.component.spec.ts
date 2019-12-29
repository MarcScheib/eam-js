import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ErrorsModule } from '../errors.module';
import { ErrorViewComponent } from './error-view.component';

describe('ErrorViewComponent', () => {
  let spectator: Spectator<ErrorViewComponent>;
  const createComponent = createComponentFactory({
    component: ErrorViewComponent,
    imports: [RouterTestingModule, ErrorsModule],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
