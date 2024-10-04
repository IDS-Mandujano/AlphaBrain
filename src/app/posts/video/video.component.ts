import { Component } from '@angular/core';
import { IPosts } from '../models/iposts';
import { PostsService } from '../services/post-service.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent {
  newPost: IPosts = {
    id: 0,
    usuario: '1',
    video: '',
    titulo: '',
    fecha_publicacion: '',
    descripcion: ''
  };

  constructor(private postsService: PostsService, private sanitizer: DomSanitizer) {}

  get posts(): IPosts[] {
    return this.postsService.getPosts();
  }

  handleSubmit(post: IPosts): void {
    const youtubeEmbedUrl = this.convertToYouTubeEmbedUrl(post.video);
    post.fecha_publicacion = new Date().toLocaleString();

    if (post.id) {
      this.postsService.updatePost({ ...post, video: youtubeEmbedUrl });
    } else {
      this.postsService.addPost({ ...post, video: youtubeEmbedUrl });
    }

    this.resetForm();
  }

  editPost(post: IPosts): void {
    this.newPost = { ...post };
  }

  deletePost(id: number): void {
    this.postsService.deletePost(id);
  }

  private convertToYouTubeEmbedUrl(url: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return url;
  }

  getEmbedUrl(url: string): SafeResourceUrl {
    const youtubeEmbedUrl = this.convertToYouTubeEmbedUrl(url);
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeEmbedUrl);
  }

  private resetForm(): void {
    this.newPost = { id: 0, usuario: '1', video: '', titulo: '', fecha_publicacion: '', descripcion: '' };
  }
}