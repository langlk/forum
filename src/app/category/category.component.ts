import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
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
    private categoryService: CategoryService,
    private router: Router
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

  hidePost() {
    this.focusedPost = null;
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

  upgoat(post: Post) {
    post.upgoat();
  }

  downgoat(post: Post) {
    post.downgoat();
  }

  goTo(post: Post) {
    this.router.navigate(['posts', this.category.name, post.id]);
  }
}
