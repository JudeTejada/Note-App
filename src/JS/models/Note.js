export default class Note {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    this.id = this.randomID();
  }

  randomID() {
    return Math.floor(Math.random() * 10000);
  }
}
