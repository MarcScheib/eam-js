import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTPConfig, HTTP_CONFIG } from './http-config';

interface RequestOptions {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  withCredentials?: boolean;
  body?: any;
}

declare type JsonRequestOptions = RequestOptions & { responseType?: 'json' };
declare type TextRequestOptions = RequestOptions & { responseType?: 'text' };

@Injectable({ providedIn: 'root' })
export class RESTClient {
  public constructor(
    private readonly http: HttpClient,
    @Optional() @Inject(HTTP_CONFIG) private readonly httpConfig?: HTTPConfig
  ) {}

  get(endpoint: string, options?: TextRequestOptions): Observable<string>;
  get<T>(endpoint: string, options?: JsonRequestOptions): Observable<T>;
  get<T>(endpoint: string, options?: RequestOptions): Observable<T> {
    return this.http.get<T>(this.getUrl(endpoint), options);
  }

  post<T>(
    endpoint: string,
    body: any | null,
    options?: JsonRequestOptions
  ): Observable<T> {
    return this.http.post<T>(this.getUrl(endpoint), body, options);
  }

  put<T>(
    endpoint: string,
    body?: any | null,
    options?: JsonRequestOptions
  ): Observable<T> {
    return this.http.put<T>(this.getUrl(endpoint), body, options);
  }

  patch<T>(
    endpoint: string,
    body?: any | null,
    options?: JsonRequestOptions
  ): Observable<T> {
    return this.http.patch<T>(this.getUrl(endpoint), body, options);
  }

  delete<T>(endpoint: string, options?: JsonRequestOptions): Observable<T> {
    return this.http.delete<T>(this.getUrl(endpoint), options);
  }

  request<T>(
    method: string,
    endpoint: string,
    options?: JsonRequestOptions
  ): Observable<T> {
    return this.http.request<T>(method, this.getUrl(endpoint), options);
  }

  private getUrl(endpoint: string): string {
    return `${this.httpConfig.baseUrl || ''}/${endpoint}`;
  }
}
