export default class NoteLS {
  constructor() {
    this.notes = [];
  }

  addNoteToLS(note) {
    //add to notes
    this.notes.push(note);

    //update LS
    this.saveToLS();
  }

  deleteNoteFromLS(id) {
    //get the current index
    const index = this.notes.findIndex((el) => el.id === id);

    //remove the note
    this.notes.splice(index, 1);
    console.log(index);

    //update LS
    this.saveToLS();
  }

  saveToLS() {
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }

  readLocal() {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) this.notes = notes;
  }
}
