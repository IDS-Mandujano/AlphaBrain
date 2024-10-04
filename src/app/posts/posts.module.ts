import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video/video.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    VideoComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [VideoComponent]
})
export class PostsModule { }
