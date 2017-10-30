import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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

  constructor(
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
}
