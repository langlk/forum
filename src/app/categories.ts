import { Category } from './category.model';
import { Post } from './post.model';

export const CATEGORIES: Category[] = [
  new Category("Stranger Things", [new Post('anonymous', 'Season 2', 'This is a testPost')]),
  new Category("Bojack Horseman", []),
  new Category("Steven Universe", []),
  new Category("Jessica Jones", [])
];
