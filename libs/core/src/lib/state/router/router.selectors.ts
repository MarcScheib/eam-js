import { getSelectors } from '@ngrx/router-store';
import { selectRouterState } from '../core.state';

export const routerSelectors = getSelectors(selectRouterState);
