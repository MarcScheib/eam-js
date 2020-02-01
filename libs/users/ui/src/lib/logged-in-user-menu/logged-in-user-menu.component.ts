import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'logged-in-user-menu',
  templateUrl: './logged-in-user-menu.component.html',
  styleUrls: ['./logged-in-user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInUserMenuComponent {
  openSignIn() {}

  logout() {}
}
