export class Post {
  upgoats: number = 0;
  downgoats: number = 0;
  posted: Date;
  lastEdited: Date;
  comments: Post[] = [];

  constructor(
    public id: number,
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

  delete(comment: Post) {
    for (var i = 0; i < this.comments.length; i++) {
      if (this.comments[i] == comment) {
        this.comments = this.comments.slice(0, i).concat(this.comments.slice(i + 1));
      }
    }
  }
}
