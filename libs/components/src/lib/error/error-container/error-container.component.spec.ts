import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ErrorsModule } from '../errors.module';
import { ErrorContainerComponent } from './error-container.component';

describe('ErrorContainerComponent', () => {
  let spectator: Spectator<ErrorContainerComponent>;
  const createComponent = createComponentFactory({
    component: ErrorContainerComponent,
    imports: [ErrorsModule],
    declareComponent: false,
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
