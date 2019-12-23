import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationFacade } from './state/navigation/navigation.facade';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eam-js-shell',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOpened$ = this.navigationFacade.isSidenavOpen$;
  sideNavNodes$ = this.navigationFacade.sideNavNodes$;
  currentSideNavNode$ = this.navigationFacade.currentSideNavNode$;

  isSideBySide = false;
  private readonly sideBySideWidth = 992;

  constructor(private readonly navigationFacade: NavigationFacade) {}

  ngOnInit() {
    this.onResize(window.innerWidth);
  }

  toggleSidenav() {
    this.navigationFacade.toggleSidenav();
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.isSideBySide = width > this.sideBySideWidth;
  }

  get mode() {
    return this.isSideBySide ? 'side' : 'over';
  }
}
