export class Post {
  upgoats: number = 0;
  downgoats: number = 0;
  posted: Date;
  lastEdited: Date;

  constructor(
    public author: string,
    public title: string,
    public content: string,
  ) {
    this.posted = new Date(Date.now());
    this.lastEdited = this.posted;
  }

  upgoat() {
    this.upgoats += 1;
  }

  downgoat() {
    this.downgoats += 1;
  }
}
