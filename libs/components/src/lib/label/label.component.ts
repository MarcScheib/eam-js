import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'eamx-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class LabelComponent {
  @Input() label = '';
  @Input() type: 'default' | 'primary' | 'accent' | 'warn' = 'default';
}
