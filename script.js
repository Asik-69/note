let noteTitle = document.getElementById("noteTitle")
let noteDescription = document.getElementById("noteDescription")
let addButton = document.getElementById("addButton")
let searchInput = document.getElementById("searchInput")
let message = document.getElementById("message");
let notesContainer = document.getElementById("notesContainer")

let notes = []
//..................................................... 
addButton.addEventListener("click", function () {


    let title = noteTitle.value.trim()
    let description = noteDescription.value.trim()



    if (title === "" || description === "") {
        message.innerText = "Please Enter Note";
        return;
    }
    message.innerText = "Note Added Successfully";

   let note = {
    title,
    description
}
    notes.push(note)
    saveNotes();
    displayNotes()
    
    noteTitle.value = "";
    noteDescription.value = "";

})
//.................................................
searchInput.addEventListener("input", function () {
message.innerText = "";
    let searchText = searchInput.value.trim().toLowerCase();

    notesContainer.innerHTML = "";

    if (searchText === "") {

    displayNotes();

    return;

}

    for (let note of notes) {

        if (
            note.title.toLowerCase().includes(searchText) ||
            note.description.toLowerCase().includes(searchText)
        ) {

            notesContainer.innerHTML += `
            <div>
                <h3>${note.title}</h3>
                <p>${note.description}</p>
                <button onclick="deleteNote(${notes.indexOf(note)})">Delete</button>
            </div>`;
        }
    }

});
//..............................................
function displayNotes() {
    notesContainer.innerHTML = ""

    for (let i = 0; i < notes.length; i++) {

    let note = notes[i];

    notesContainer.innerHTML += `
        <div>
            <h3>${note.title}</h3>
            <p>${note.description}</p>
            <button onclick="editNote(${i})">Edit</button>
            <button onclick="deleteNote(${i})">Delete</button>
        </div> `
}

}
//......................................................
function deleteNote(index) {
let answer = confirm("Are you sure you want to delete this note?");
   if (answer) {

    notes.splice(index, 1);

    saveNotes();

    message.innerText = "Note Deleted Successfully";

    displayNotes();

}

}
//..........................................
function saveNotes() {
localStorage.setItem("notes", JSON.stringify(notes));
}
function loadNotes() {

    let savedNotes = localStorage.getItem("notes");

    if (savedNotes !== null) {

        notes = JSON.parse(savedNotes);

    }

    displayNotes();

}

loadNotes();

//..............................
function editNote(index) {

}