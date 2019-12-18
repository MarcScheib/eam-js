import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eamx-heading-title',
  templateUrl: 'heading-title.component.html',
  host: { class: 'eamx-heading-title' },
  encapsulation: ViewEncapsulation.None,
})
export class HeadingTitleComponent {}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'eamx-heading-actions',
  host: { class: 'eamx-heading-actions' },
})
export class HeadingActionsDirective {}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eamx-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss'],
  host: { class: 'eamx-heading' },
  encapsulation: ViewEncapsulation.None,
})
export class HeadingComponent {}
