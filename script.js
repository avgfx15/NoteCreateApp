const addNoteBtn = document.querySelector("#addNoteBtn");

// Update NoteText and Save in LocalStorage

const updateLocalStorageData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
};
// End Of Update NoteText  and Save in LocalStorage

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("noteBox");

  const HtmlData = `
    <div class="noteBtn">
            <button class="edit">
              <i class="fa-solid fa-pen-to-square actionIcon"></i>
            </button>
            <button class="delete">
              <i class="fa-solid fa-trash-can actionIcon"></i>
            </button>
    </div>
    <div class="main ${text ? "" : "hidden"}"> </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>    
        `;
  note.insertAdjacentHTML("afterbegin", HtmlData);

  // Edit and Delete in Note Script

  const noteEdit = note.querySelector(".edit");
  const noteDelete = note.querySelector(".delete");
  const mainDiv = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  // Delete Note by clicking DelBtn

  noteDelete.addEventListener("click", () => {
    note.remove();

    // Update NoteText and Save in LocalStorage
    updateLocalStorageData();
    // End Of Update NoteText  and Save in LocalStorage
  });

  // End Of Delete Note by clicking DelBtn

  // Edit Note by Clicking on Edit BTN

  // Toggle button on click

  textArea.value = text;
  mainDiv.innerHTML = text;

  noteEdit.addEventListener("click", () => {
    mainDiv.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  // End Of Toggle button on click

  // Save notes on local storage

  textArea.addEventListener("change", (event) => {
    const value = event.target.value;
    mainDiv.innerHTML = value;

    // Update NoteText and Save in LocalStorage

    updateLocalStorageData();
    // End Of Update NoteText  and Save in LocalStorage
  });
  // End  Of Save notes on local storage
  // End Of Edit Note by Clicking on Edit BTN

  // End Of Edit and Delete in Note Script

  document.body.appendChild(note);
};

// Getting Notes data from Local Storage
const notes = JSON.parse(localStorage.getItem("notes"));

console.log(notes);

if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}
// End Of Getting Notes data from Local Storage
addNoteBtn.addEventListener("click", addNewNote);
