export const elements = {
  formNote: document.querySelector(".note"),
  noteTitle: document.querySelector(".note__title"),
  noteContent: document.querySelector(".note__description"),
  btnAddNote: document.querySelector(".note__submit"),
  mainContainer: document.querySelector("#notes"),
  card: document.querySelector(".card"),
  noteIcon: document.querySelector(".note__submit--icon"),
};

export const getInputFields = () => {
  const title = elements.noteTitle.value;
  const desc = elements.noteContent.value;

  return {
    title,
    desc,
  };
};

export const clearInputFields = () => {
  elements.noteTitle.value = "";
  elements.noteContent.value = "";
};
