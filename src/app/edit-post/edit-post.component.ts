import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  @Input() post: Post;
  @Output() editDone = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  done() {
    this.editDone.emit();
  }

}
