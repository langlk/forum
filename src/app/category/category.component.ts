import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../category.model';
import { Post } from '../post.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {
  categoryName: string;
  category: Category;
  focusedPost: Post;
  editPost: Post;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryName = urlParameters['name'];
    });
    this.category = this.categoryService.findCategory(this.categoryName);
  }

  showPost(post: Post) {
    this.editPost = null;
    this.focusedPost = post;
  }

  addPost(post: Post) {
    this.category.posts.push(post);
  }

  postEvent(event: string, post: Post) {
    if (event == "edit") {
      this.edit(post);
    } else if (event == "delete") {
      this.delete(post);
    }
  }

  edit(post: Post) {
    this.focusedPost = null;
    this.editPost = post;
  }

  endEdit(post: Post) {
    this.editPost = null;
    this.focusedPost = post;
  }

  delete(post: Post) {
    this.category.delete(post);
  }

}
