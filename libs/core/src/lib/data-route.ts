import { Route } from '@angular/router';

export interface RouteData {
  label?: string;
}

export interface DataRoute extends Route {
  data?: RouteData;
}

export declare type DataRoutes = DataRoute[];
