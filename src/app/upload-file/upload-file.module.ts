import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormUploadVideoComponent } from './form-upload-video/form-upload-video.component';

@NgModule({
  declarations: [
    FormUploadVideoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [FormUploadVideoComponent]
})
export class UploadFileModule { }
