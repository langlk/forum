import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from './category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CategoryService]
})
export class AppComponent implements OnInit {
  categories: Category[];

  constructor(private categoryService: CategoryService, private router: Router) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

}
