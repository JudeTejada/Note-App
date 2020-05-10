import { elements } from "./base";

export const checkIfEmpty = () => {
  if (!elements.noteTitle.value || !elements.noteContent.value) {
    //means its incomplete
    return true;
  } else {
    //proceed if everything is fine
    return false;
  }
};

export const renderNote = (note) => {
  const markup = `

        <div class="card" data-id="${note.id}">
          <h2 class="card__title">${note.title}</h2>
          <p class="card__content">${note.content}</p>

          <div class="card__btns">
            <button class="card__delete" data-id="${note.id}">
              <span class="material-icons">
                clear
              </span>
            </button>
            <button class="card__edit">
              <span class="material-icons">
                create
              </span> </button>
          </div>
        </div>
  `;
  elements.mainContainer.insertAdjacentHTML("beforeend", markup);
};

//delete the note
export const deleteNote = (parent) => {
  const parentContainer = parent.parentElement;

  parentContainer.removeChild(parent);
};
