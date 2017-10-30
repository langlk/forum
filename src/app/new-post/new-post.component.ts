import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post.model';
import { Category } from '../category.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input() category: Category;
  @Input() parent: Post;
  @Output() newPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addPost(author: string, title: string, content: string) {
    let id: number = this.category.posts.length + 1;
    let post: Post = new Post(id, author, title, content);
    this.newPost.emit(post);
  }

  addComment(author: string, content: string) {
    let post: Post = new Post(null, author, "comment", content);
    this.newPost.emit(post);
  }

}
