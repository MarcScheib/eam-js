import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { THEMES } from './state/settings/settings.state';

const ASSET_URL = 'assets/themes/';

@Injectable({ providedIn: 'root' })
export class ThemeManagerService {
  private readonly _renderer: Renderer2;

  constructor(
    readonly rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this._renderer = rendererFactory.createRenderer(null, null);
  }

  setTheme(themeKey: string) {
    const theme = THEMES[themeKey];
    if (!theme) {
      return;
    }

    const key = 'theme';
    const el = this._getExistingLinkElement(key);
    if (theme.default) {
      this._removeTheme(el);
    } else {
      const href = ASSET_URL + theme.href;
      this._createLinkElement(href, key).then(() => {
        this._removeTheme(el);
      });
    }
  }

  private _removeTheme(el: Element) {
    if (el) {
      this.document.head.removeChild(el);
    }
  }

  private _getExistingLinkElement(key: string) {
    return this.document.head.querySelector(`#${key}`);
  }

  private _createLinkElement(href: string, key: string) {
    return new Promise(resolve => {
      const linkEl = this._renderer.createElement('link');
      this._renderer.setAttribute(linkEl, 'rel', 'stylesheet');
      this._renderer.setAttribute(linkEl, 'type', 'text/css');
      this._renderer.setAttribute(linkEl, 'href', href);
      this._renderer.setAttribute(linkEl, 'id', key);
      this._renderer.setProperty(linkEl, 'onload', resolve);
      this._renderer.appendChild(this.document.head, linkEl);
    });
  }
}
