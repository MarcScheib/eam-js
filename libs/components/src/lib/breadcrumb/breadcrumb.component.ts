import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'eamx-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent implements OnInit {
  @Input() rootLabel = 'Home';

  breadcrumbs: BreadCrumb[];

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.breadcrumbs = this._buildBreadCrumb(this.activatedRoute.root);
  }

  private _buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: BreadCrumb[] = []
  ): BreadCrumb[] {
    const label = route.routeConfig // FIXME: error when data is not available
      ? route.routeConfig.data['label']
      : this.rootLabel;
    const path = route.routeConfig ? route.routeConfig.path : '';
    const breadcrumb = {
      label,
      url: `${url}${path}/`,
    };
    const newBreadcrumbs = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this._buildBreadCrumb(
        route.firstChild,
        breadcrumb.url,
        newBreadcrumbs
      );
    }
    return newBreadcrumbs;
  }
}
