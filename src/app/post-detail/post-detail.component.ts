import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Post } from '../post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() post: Post;
  @Output() postButton = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.postButton.emit("edit");
  }

  delete() {
    this.postButton.emit("delete");
  }

}
