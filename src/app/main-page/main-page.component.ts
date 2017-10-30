import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [CategoryService]
})
export class MainPageComponent implements OnInit {
  categories: Category[];

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  goTo(category: Category) {
    this.router.navigate(['categories', category.name])
  }

}
