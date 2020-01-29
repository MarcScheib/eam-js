import { Injectable } from '@angular/core';
import { TitleService } from '../services/title.service';

@Injectable({ providedIn: 'root' })
export class ApplicationFacade {
  viewTitle$ = this.titleService.viewTitle$;

  constructor(private readonly titleService: TitleService) {}
}
