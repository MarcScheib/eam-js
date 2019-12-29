import { Injectable } from '@angular/core';
import {
  DefaultHttpUrlGenerator,
  HttpResourceUrls,
  normalizeRoot,
  Pluralizer,
} from '@ngrx/data';

@Injectable()
export class PluralHttpUrlGenerator extends DefaultHttpUrlGenerator {
  constructor(private pluralizzer: Pluralizer) {
    super(pluralizzer);
  }

  protected getResourceUrls(
    entityName: string,
    root: string
  ): HttpResourceUrls {
    const resourceUrls = this.knownHttpResourceUrls[entityName];
    if (resourceUrls) {
      return resourceUrls;
    }

    const nRoot = normalizeRoot(root);
    const url = `${nRoot}/${this.pluralizzer.pluralize(
      entityName
    )}/`.toLowerCase();
    const newResourceUrls = {
      entityResourceUrl: url,
      collectionResourceUrl: url,
    };
    this.registerHttpResourceUrls({ [entityName]: newResourceUrls });
    return newResourceUrls;
  }
}
