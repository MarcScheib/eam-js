import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthFacade, SignInData } from '@eam-js/auth/data-access';

@Component({
  selector: 'sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPageComponent {
  loading$ = this.authFacade.loading$;
  error$ = this.authFacade.error$;

  constructor(private readonly authFacade: AuthFacade) {}

  onSignIn($event: SignInData) {
    this.authFacade.signIn($event);
  }
}
