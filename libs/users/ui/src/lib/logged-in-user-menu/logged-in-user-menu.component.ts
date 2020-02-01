import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'logged-in-user-menu',
  templateUrl: './logged-in-user-menu.component.html',
  styleUrls: ['./logged-in-user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInUserMenuComponent {
  @Output() signIn = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
}
