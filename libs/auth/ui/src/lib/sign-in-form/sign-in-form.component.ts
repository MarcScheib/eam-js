import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthCredentials } from '@eam-js/auth/api';

@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInFormComponent {
  @Input()
  set loading(isLoading: boolean) {
    if (isLoading) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() signIn = new EventEmitter<AuthCredentials>();

  form = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    keepToken: [false],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  onSubmit() {
    if (!this.form.valid) {
      return;
    }

    const { username, password } = this.form.value;
    this.signIn.emit({ username, password });
  }
}
