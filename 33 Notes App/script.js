"use strict";

const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes"));

//Functions
const updateLS = function () {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNotes = function (text = "") {
  const notes = document.createElement("div");
  notes.classList.add("note");
  notes.innerHTML = `    
  <div class="tools">
     <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
</div>

<div class="main ${text ? "" : "hidden"}"></div>
<textarea class=${text ? "hidden" : ""}></textarea>`;

  const editBtn = notes.querySelector(".edit");
  const deleteBtn = notes.querySelector(".delete");
  const main = notes.querySelector(".main");
  const textArea = notes.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  editBtn.addEventListener("click", function () {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", function () {
    notes.remove();
    updateLS();
  });

  textArea.addEventListener("input", function (e) {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLS();
  });

  document.body.appendChild(notes);
};

//Initializing
if (notes) {
  notes.forEach((note) => addNotes(note));
}

//EventHandlers
addBtn.addEventListener("click", function () {
  addNotes();
});
