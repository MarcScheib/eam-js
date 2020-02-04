import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'eamx-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'eamx-text-editor' },
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => TextEditorComponent),
    },
  ],
})
export class TextEditorComponent implements ControlValueAccessor {
  @ViewChild(QuillEditorComponent, { static: true })
  quillEditor!: QuillEditorComponent;

  @Input() placeholder = '';

  writeValue(obj: any): void {
    this.quillEditor.writeValue(obj);
  }

  setDisabledState(isDisabled: boolean): void {
    this.quillEditor.setDisabledState(isDisabled);
  }

  registerOnChange(fn: (modelValue: any) => void): void {
    this.quillEditor.registerOnChange(fn);
  }

  registerOnTouched(fn: () => void): void {
    this.quillEditor.onModelChange(fn);
  }
}
