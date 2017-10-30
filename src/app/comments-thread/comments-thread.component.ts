import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-comments-thread',
  templateUrl: './comments-thread.component.html',
  styleUrls: ['./comments-thread.component.css']
})
export class CommentsThreadComponent implements OnInit {
  @Input() post: Post;
  @Input() editPost: Post;
  replyPost: Post;
  @Output() threadEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  commentHandle(eventInfo) {
    if (eventInfo['event'] == "delete") {
      this.delete(eventInfo['post']);
    } else {
      this.postHandle(eventInfo['event'], eventInfo['post']);
    }
  }

  postHandle(event: string, eventPost: Post) {
    this.threadEvent.emit({"event": event, "post": eventPost});
  }

  reply(post: Post) {
    this.replyPost = post;
  }

  addComment(comment: Post) {
    this.post.comments.push(comment);
    this.replyPost = null;
  }

  delete(comment: Post) {
    this.post.delete(comment);
  }

}
