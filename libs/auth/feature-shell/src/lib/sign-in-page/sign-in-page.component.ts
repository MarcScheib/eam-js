import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacade } from '@eam-js/auth/data-access';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent {
  constructor(private readonly authFacade: AuthFacade) {}

  onSignIn($event) {
    console.log($event);
  }
}
