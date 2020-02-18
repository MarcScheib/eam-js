import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'logged-in-user-menu',
  templateUrl: './logged-in-user-menu.component.html',
  styleUrls: ['./logged-in-user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInUserMenuComponent {
  @Input() user = false;

  @Output() signIn = new EventEmitter<void>();
  @Output() signOut = new EventEmitter<void>();
}
