import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  @Output() editPost = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.editPost.emit();
  }

}
