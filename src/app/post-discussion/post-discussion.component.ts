import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post.model';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-post-discussion',
  templateUrl: './post-discussion.component.html',
  styleUrls: ['./post-discussion.component.css']
})
export class PostDiscussionComponent implements OnInit {
  postID: number;
  categoryName: string;
  mainPost: Post;
  category: Category;
  editPost: Post;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryName = urlParameters['category'];
      this.postID = parseInt(urlParameters['id']);
    });
    this.category = this.categoryService.findCategory(this.categoryName);
    this.mainPost = this.category.find(this.postID);
  }

  addComment(comment: Post) {
    this.mainPost.comments.push(comment);
  }

  eventHandle(event: string, post: Post) {
    if (event == "edit") {
      this.edit(post);
    } else if (event == "delete") {
      this.delete(post);
    } else if (event == "upgoat") {
      this.upgoat(post);
    } else if (event == "downgoat") {
      this.downgoat(post);
    } else if (event == "endEdit") {
      this.endEdit();
    }
  }

  edit(post: Post) {
    this.editPost = post;
  }

  endEdit() {
    this.editPost = null;
  }

  delete(post: Post) {
    if (post.id) {
      this.category.delete(post);
      this.router.navigate(['categories', this.category.name]);
    } else {
      this.mainPost.delete(post);
    }
  }

  upgoat(post: Post) {
    post.upgoat();
  }

  downgoat(post: Post) {
    post.downgoat();
  }
}
