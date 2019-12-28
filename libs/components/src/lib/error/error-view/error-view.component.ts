import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ErrorService } from '../error.service';

@Component({
  selector: 'eamx-error-view',
  templateUrl: './error-view.component.html',
  styleUrls: ['./error-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorViewComponent {
  errors$ = this.errorService.errors$;

  constructor(private readonly errorService: ErrorService) {}

  onClearAll() {
    this.errorService.clearAll();
  }
}
