import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'eamx-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LabelComponent {
  @Input() label = '';
  @Input() type: 'default' | 'primary' | 'accent' | 'warn' = 'default';
}
