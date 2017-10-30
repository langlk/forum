import { Post } from './post.model';

export class Category {
  constructor(public name: string, public posts: Post[]) {}
}
