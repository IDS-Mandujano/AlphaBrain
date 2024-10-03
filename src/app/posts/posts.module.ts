import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { CardPostComponent } from './card-post/card-post.component';
import { PostsDashboardComponent } from './posts-dashboard/posts-dashboard.component';



@NgModule({
  declarations: [
    PostsComponent,
    CardPostComponent,
    PostsDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
