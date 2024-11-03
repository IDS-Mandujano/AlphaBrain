import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VideoServiceService } from '../services/video-service.service';

@Component({
  selector: 'app-form-upload-video',
  templateUrl: './form-upload-video.component.html',
  styleUrls: ['./form-upload-video.component.css']
})
export class FormUploadVideoComponent {
  videoForm: FormGroup;

  constructor(private fb: FormBuilder, private videoService: VideoServiceService) {
    this.videoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      video: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.videoForm.patchValue({
      video: file
    });
  }

  onSubmit() {
    if (this.videoForm.valid) {
      this.videoService.uploadVideo(this.videoForm.value).subscribe(
        response => {
          console.log('Video subido exitosamente', response);
          this.videoForm.reset();
        },
        error => {
          console.error('Error al subir el video', error);
        }
      );
    }
  }
}
