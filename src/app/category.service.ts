import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CATEGORIES } from './categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }

  findCategory(name: string) {
    for (var i = 0; i < CATEGORIES.length; i++) {
      if (CATEGORIES[i].name == name) {
        return CATEGORIES[i];
      }
    }
  }

}
