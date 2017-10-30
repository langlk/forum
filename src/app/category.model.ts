import { Post } from './post.model';

export class Category {
  constructor(public name: string, public posts: Post[]) {}

  delete(post: Post) {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i] == post) {
        this.posts = this.posts.slice(0, i).concat(this.posts.slice(i + 1));
      }
    }
  }

  find(id: number) {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) {
        return this.posts[i];
      }
    }
  }
}
