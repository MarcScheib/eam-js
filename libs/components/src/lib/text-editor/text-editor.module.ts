import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { TextEditorComponent } from './text-editor.component';

@NgModule({
  imports: [CommonModule, QuillModule.forRoot()],
  declarations: [TextEditorComponent],
  exports: [TextEditorComponent],
})
export class TextEditorModule {}
