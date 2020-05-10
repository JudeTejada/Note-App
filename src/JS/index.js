import "../SASS/main.scss";
import Note from "./models/Note";
import NoteLS from "./models/NoteLS";

import * as noteView from "./views/noteview";
import { elements, getInputFields } from "./views/base";
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
  } else if (type === "old") {
  }
};
// DELET CONTROLLER
const deleteController = (id, parent) => {
  //delete a single item

  noteView.deleteNote(parent);

  //delete from Local Storage
  state.noteLS.deleteNoteFromLS(parseInt(id));
};

elements.formNote.addEventListener("submit", (e) => {
  e.preventDefault();

  noteController();
});

// EDIT CONTROLLER
const updateController = () => {
  //get all the notes
  // const notes = Array.from(document.querySelectorAll(".card"));
};

// LISTENERS
elements.mainContainer.addEventListener("click", (e) => {
  if (e.target.matches(".card__delete, .card__delete *")) {
    const parentElement = e.target.closest(".card");
    deleteController(e.target.parentElement.dataset.id, parentElement);
  }

  if (e.target.closest(".card__edit")) {
    const title =
      e.target.parentElement.parentElement.previousElementSibling
        .previousElementSibling.textContent;
    const body =
      e.target.parentElement.parentElement.previousElementSibling.textContent;

    const card = e.target.parentElement.parentElement.parentElement;
    updateController(card);
  }
});
//TESTING
window.addEventListener("load", () => {
  //create a object
  state.noteLS = new NoteLS();

  state.noteLS.readLocal();

  state.noteLS.notes.forEach((note) => noteView.renderNote(note));
});
