import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryComponent } from './category/category.component';
import { routing } from './app.routing';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostDiscussionComponent } from './post-discussion/post-discussion.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CategoryComponent,
    PostDetailComponent,
    NewPostComponent,
    EditPostComponent,
    PostDiscussionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
