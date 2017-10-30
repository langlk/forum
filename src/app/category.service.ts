import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { CATEGORIES } from './categories';

@Injectable()
export class CategoryService {

  constructor() { }

  getCategories() {
    return CATEGORIES;
  }

}
