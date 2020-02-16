import { InjectionToken } from '@angular/core';

export interface HTTPConfig {
  baseUrl: string;
}

export const HTTP_CONFIG = new InjectionToken<HTTPConfig>('http-config');
