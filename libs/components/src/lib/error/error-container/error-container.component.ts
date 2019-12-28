import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ApplicationError } from '../application-error';

@Component({
  selector: 'eamx-error-container',
  templateUrl: './error-container.component.html',
  styleUrls: ['./error-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorContainerComponent implements OnChanges {
  @Input() errors: ApplicationError[];

  @Output() clearAll = new EventEmitter<void>();

  index = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.errors) {
      this.index = 0;
    }
  }

  previous() {
    this.index = Math.max(0, --this.index);
  }

  next() {
    this.index = Math.min(this.errors.length - 1, ++this.index);
  }
}
