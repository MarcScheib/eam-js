import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  log(error: any) {
    console.error(error);
  }
}
