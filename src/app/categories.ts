import { Category } from './category.model';
import { Post } from './post.model';

export const CATEGORIES: Category[] = [
  new Category("Stranger Things", [
    new Post(1, 'anonymous', 'Season 2', 'This is a test post'),
    new Post(2, 'bob', 'The Upsidedown', 'This is another test post.')
  ]),
  new Category("Bojack Horseman", []),
  new Category("Steven Universe", []),
  new Category("Jessica Jones", [])
];
