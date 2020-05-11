import "../SASS/main.scss";
import Note from "./models/Note";
import NoteLS from "./models/NoteLS";

import * as noteView from "./views/noteview";
import { elements, getInputFields, clearInputFields } from "./views/base";
// GLOBAL CONTROLLER

const state = {};

// ADDING A NOTE CONTROLLER
const noteController = (type = "new") => {
  //check input if empty

  if (type === "new") {
    const isEmpty = noteView.checkIfEmpty();

    // check if everything filled
    if (isEmpty) alert("Please Fill out all the values");

    const { title, desc } = getInputFields();

    //create new object
    state.note = new Note(title, desc);

    //save to LS

    state.noteLS.addNoteToLS(state.note);
    noteView.renderNote(state.note);
    clearInputFields();
  }
};

// DELETE CONTROLLER
const deleteController = (id, parent) => {
  //delete a single item

  noteView.deleteNote(parent);

  //delete from Local Storage
  state.noteLS.deleteNoteFromLS(parseInt(id));
};

// LISTENERS

elements.formNote.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.matches(".note__submit, .note__submit *")) {
    noteController();
  }
});

// LISTENERS
elements.mainContainer.addEventListener("click", (e) => {
  if (e.target.matches(".card__delete, .card__delete *")) {
    const parentElement = e.target.closest(".card");
    deleteController(e.target.parentElement.dataset.id, parentElement);
  }
});

window.addEventListener("load", () => {
  //create a object
  state.noteLS = new NoteLS();

  state.noteLS.readLocal();

  state.noteLS.notes.forEach((note) => noteView.renderNote(note));
});
