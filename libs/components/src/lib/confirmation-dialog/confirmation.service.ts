import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData,
} from './confirmation-dialog.component';

@Injectable({ providedIn: 'root' })
export class ConfirmationService {
  constructor(private readonly dialogSvc: MatDialog) {}

  open(data: ConfirmationDialogData): Observable<boolean> {
    return this.dialogSvc
      .open<ConfirmationDialogComponent, ConfirmationDialogData, boolean>(
        ConfirmationDialogComponent,
        {
          data,
        }
      )
      .afterClosed();
  }
}
