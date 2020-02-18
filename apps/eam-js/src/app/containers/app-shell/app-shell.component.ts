import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { AuthFacade } from '@eam-js/auth/data-access';
import { ConfirmationService } from '@eam-js/components/confirmation-dialog';
import { AppFacade, NavigationFacade } from '@eam-js/core';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AppShellComponent implements OnInit {
  viewTitle$ = this.appFacade.viewTitle$;
  isSidenavOpen$ = this.navigationFacade.isSidenavOpen$;
  sideNavNodes$ = this.navigationFacade.sideNavNodes$;
  currentSideNavNode$ = this.navigationFacade.currentSideNavNode$;

  isSideBySide = false;
  private readonly sideBySideWidth = 992;

  constructor(
    private readonly appFacade: AppFacade,
    private readonly authFacade: AuthFacade,
    private readonly navigationFacade: NavigationFacade,
    private readonly confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isSideBySide = width > this.sideBySideWidth;
  }

  toggleSidenav() {
    this.navigationFacade.toggleSidenav();
  }

  onSignIn() {
    this.authFacade.goToSignIn();
  }

  onSignOut() {
    this.confirmationService
      .open({
        title: 'Sign Out',
        message: 'Are you sure you want to sign out?',
      })
      .subscribe(confirmed => {
        if (confirmed) {
          this.authFacade.signOut();
        }
      });
  }

  get mode() {
    return this.isSideBySide ? 'side' : 'over';
  }
}
