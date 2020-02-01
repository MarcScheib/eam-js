import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialogComponent } from '@eam-js/auth/feature-shell';
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
    private readonly navigationFacade: NavigationFacade,
    private readonly dialogService: MatDialog
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
    const dialogRef = this.dialogService.open<SignInDialogComponent>(
      SignInDialogComponent
    );
  }

  onLogout() {}

  get mode() {
    return this.isSideBySide ? 'side' : 'over';
  }
}
