import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { CardPostComponent } from './card-post/card-post.component';
import { PostsDashboardComponent } from './posts-dashboard/posts-dashboard.component';
import { PostFormComponent } from './post-form/post-form.component';



@NgModule({
  declarations: [
    PostsComponent,
    CardPostComponent,
    PostsDashboardComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
