import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { combineLatest, ConnectableObservable, Observable } from 'rxjs';
import { map, publishLast, publishReplay } from 'rxjs/operators';
import { LocationService } from './location.service';
import {
  CurrentNodes,
  NavigationNode,
  NavigationResponse,
  NavigationViews,
  VersionInfo,
} from './navigation.model';

export const DEFAULT_NAVIGATION_PATH = 'assets/navigation.json';
export const NAVIGATION_PATH = new InjectionToken<string>('NavigationPath', {
  providedIn: 'root',
  factory: () => DEFAULT_NAVIGATION_PATH,
});

@Injectable({ providedIn: 'root' })
export class NavigationService {
  navigationViews: Observable<NavigationViews>;
  versionInfo: Observable<VersionInfo>;
  currentNodes: Observable<CurrentNodes>;

  constructor(
    private readonly http: HttpClient,
    private readonly location: LocationService,
    @Inject(NAVIGATION_PATH) private readonly navigationPath: string
  ) {
    const navigationInfo = this.fetchNavigationInfo();
    this.navigationViews = this.getNavigationViews(navigationInfo);
    this.currentNodes = this.getCurrentNodes(this.navigationViews);
    this.versionInfo = this.getVersionInfo(navigationInfo);
  }

  private fetchNavigationInfo(): Observable<NavigationResponse> {
    const navigationInfo = this.http
      .get<NavigationResponse>(this.navigationPath)
      .pipe(publishLast());
    (navigationInfo as ConnectableObservable<NavigationResponse>).connect();
    return navigationInfo;
  }

  private getVersionInfo(navigationInfo: Observable<NavigationResponse>) {
    const versionInfo = navigationInfo.pipe(
      map(response => response.__versionInfo),
      publishLast()
    );
    (versionInfo as ConnectableObservable<VersionInfo>).connect();
    return versionInfo;
  }

  private getNavigationViews(
    navigationInfo: Observable<NavigationResponse>
  ): Observable<NavigationViews> {
    const navigationViews = navigationInfo.pipe(
      map((response: NavigationResponse) => {
        const views = Object.assign({}, response);
        Object.keys(views).forEach((key: string) => {
          if (key[0] === '_') {
            delete views[key];
          }
        });
        return views as NavigationViews;
      }),
      publishLast()
    );
    (navigationViews as ConnectableObservable<NavigationResponse>).connect();
    return navigationViews;
  }

  private getCurrentNodes(
    navigationViews: Observable<NavigationViews>
  ): Observable<CurrentNodes> {
    const currentNodes = combineLatest([
      navigationViews.pipe(map(views => this.computeUrlToNavNodesMap(views))),
      this.location.currentPath,
    ]).pipe(
      map(([navMap, url]) => {
        return navMap.get(url) || { '': { view: '', url: url, nodes: [] } };
      }),
      publishReplay(1)
    );
    (currentNodes as ConnectableObservable<CurrentNodes>).connect();
    return currentNodes;
  }

  private computeUrlToNavNodesMap(
    navigation: NavigationViews
  ): Map<string, CurrentNodes> {
    const navMap = new Map<string, CurrentNodes>();
    Object.keys(navigation).forEach((view: string) =>
      navigation[view].forEach((node: NavigationNode) =>
        this.walkNodes(view, navMap, node)
      )
    );
    return navMap;
  }

  private walkNodes(
    view: string,
    navMap: Map<string, CurrentNodes>,
    node: NavigationNode,
    ancestors: NavigationNode[] = []
  ): void {
    const nodes: NavigationNode[] = [node, ...ancestors];
    const url: string | undefined = node.url;
    this.ensureHasTooltip(node);

    if (url) {
      const cleanedUrl = url;
      if (!navMap.has(cleanedUrl)) {
        navMap.set(cleanedUrl, {});
      }
      const navMapItem = navMap.get(cleanedUrl);
      navMapItem[view] = { url, view, nodes };
    }

    if (node.children) {
      node.children.forEach((child: NavigationNode) =>
        this.walkNodes(view, navMap, child, nodes)
      );
    }
  }

  private ensureHasTooltip(node: NavigationNode) {
    const title = node.title;
    const tooltip = node.tooltip;
    if (tooltip == null && title) {
      // add period if no trailing punctuation
      node.tooltip = title + (/[a-zA-Z0-9]$/.test(title) ? '.' : '');
    }
  }
}
