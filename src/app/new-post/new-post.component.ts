import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Output() newPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addPost(author: string, title: string, content: string) {
    let post: Post = new Post(author, title, content);
    this.newPost.emit(post);
  }

}
