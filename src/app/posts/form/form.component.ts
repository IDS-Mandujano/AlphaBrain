import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPosts } from '../models/iposts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Input() newPost: IPosts = {
    id: 0,
    usuario: '1',
    video: '',
    titulo: '',
    fecha_publicacion: '',
    descripcion: ''
  }

  @Output() submitPost = new EventEmitter<IPosts>();

  addPost(): void {
    this.submitPost.emit(this.newPost);
  }

}
