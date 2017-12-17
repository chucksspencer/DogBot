import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { environment } from 'environments/environment';

/**
 * This class provides a set of default request options for use with an Http request.
 * Includes environment configurations (e.g. base url). The Http service will use
 * this by default per the provider configuration in the app module.
 * Per the angular docs: https://angular.io/guide/http
 */
@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {

  constructor() {
    super();
    // Set the default 'Content-Type' header
    this.headers.set('Content-Type', 'application/json');
  }

  // These options will be merged with those specified in the http call
  /**
   * TODO: for some very few instances, we'll need to _not_ override the options.url
   * because we'll be hitting external apis. for now my condition on that will be if the
   * url explicitly contains 'http' in the beginning of its call
   */
  merge(options?: RequestOptionsArgs): RequestOptions {
    if (options.url && options.url.indexOf('http') !== 0) {
      options.url = environment.baseUrl + options.url;
    }

    const result = super.merge(options);
    result.merge = this.merge;
    return result;
  }
}

export const requestOptionsProvider = { provide: RequestOptions, useClass: DefaultRequestOptions };
