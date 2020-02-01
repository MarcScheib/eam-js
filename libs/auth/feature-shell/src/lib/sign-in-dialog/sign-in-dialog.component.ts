import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { of, Subject } from 'rxjs';

@Component({
  selector: 'sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInDialogComponent implements OnInit {
  loading$ = of(false);
  error$ = new Subject<string>();

  signInForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    keepToken: [false],
  });

  constructor(
    private readonly dialogRef: MatDialogRef<SignInDialogComponent>,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  signIn() {
    if (!this.signInForm.valid) {
      return;
    }

    console.log(this.signInForm.value);
  }

  cancel() {
    this.dialogRef.close();
  }
}
