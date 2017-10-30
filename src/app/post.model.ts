export class Post {
  upgoats: number = 0;
  downgoats: number = 0;
  posted: Date;
  lastEdited: Date;
  comments: Post[] = [];
  deleted: boolean = false;

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
        if (this.comments[i].comments.length != 0) {
          this.comments[i].deleted = true;
          this.comments[i].author = null;
          this.comments[i].upgoats = null;
          this.comments[i].downgoats = null;
          this.comments[i].lastEdited = null;
          this.comments[i].posted = null;
        } else {
          this.comments = this.comments.slice(0, i).concat(this.comments.slice(i + 1));
        }
      }
    }
  }
}
