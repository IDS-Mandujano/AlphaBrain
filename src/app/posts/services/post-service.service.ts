import { Injectable } from '@angular/core';
import { IPosts } from '../models/iposts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private posts: IPosts[] = [];
  private nextId: number = 1;

  constructor() {
    this.loadPosts();
  }

  private loadPosts() {
    const storedPosts = localStorage.getItem('posts');
    this.posts = storedPosts ? JSON.parse(storedPosts) : [];
    this.nextId = this.posts.length > 0 ? this.posts[this.posts.length - 1].id + 1 : 1;
  }

  getPosts(): IPosts[] {
    return this.posts;
  }

  addPost(post: IPosts): void {
    this.posts.push({ ...post, id: this.nextId++, usuario: '1', fecha_publicacion: new Date().toISOString() });
    this.savePosts();
  }

  updatePost(updatedPost: IPosts): void {
    const index = this.posts.findIndex(post => post.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
    }
  }

  deletePost(id: number): void {
    this.posts = this.posts.filter(post => post.id !== id);
    this.savePosts();
  }

  private savePosts(): void {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}
