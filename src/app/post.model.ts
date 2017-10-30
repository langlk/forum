export class Post {
  upgoats: number = 0;
  downgoats: number = 0;

  constructor(public author: string, public title: string, public content: string) {}

  upgoat() {
    this.upgoats += 1;
  }

  downgoat() {
    this.downgoats += 1;
  }
}
