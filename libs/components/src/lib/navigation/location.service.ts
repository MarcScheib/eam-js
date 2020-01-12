import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LocationService {
  private urlSubject = new ReplaySubject<string>(1);

  currentUrl = this.urlSubject.pipe(map(url => this.stripSlashes(url)));
  currentPath = this.currentUrl.pipe(
    map(url => (url.match(/[^?#]*/) || [])[0]) // strip query and hash
  );

  constructor(router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        return this.urlSubject.next(event.urlAfterRedirects || event.url || '');
      }
    });
  }

  private stripSlashes(url: string) {
    return url.replace(/^\/+/, '').replace(/\/+(\?|#|$)/, '$1');
  }
}
