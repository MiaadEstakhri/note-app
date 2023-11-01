import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/addNewNote/addNewNote";
import NoteList from "./components/noteList/noteList";
import NoteStatus from "./components/noteStatus/noteStatus";
import NoteHeader from "./components/noteHeader/noteHeader";

function App() {
  const [notes, setNotes] = useState([]);
  const [sortBy, setSortBy] = useState("latest");

  const handleAddNote = (newNote) => {
    setNotes((prevNote) => [...prevNote, newNote]);
  };

  const handleCompleteNote = (event) => {
    const noteId = Number(event.target.value);
    const newNotes = notes.map((note) =>
      note.id === noteId ? { ...note, completed: !note.completed } : note
    );
    setNotes(newNotes);
  };

  const handleDelete = (id) => {
    const removeNote = notes.filter((note) => note.id !== id);
    setNotes(removeNote);
  };

  const clickSortHandler = (item) => {
    setSortBy(item.value);
  };

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createAt) - new Date(a.createAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <main className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="col-11 col-xl-9   d-flex flex-column  rounded-4 shadow-lg note-container ">
        <section className="col-12 d-flex justify-content-center align-items-center text-center note-header rounded-top-4 text-white  py-4 mb-3">
          <NoteHeader notes={notes} onSort={clickSortHandler} />
        </section>
        <section className="col-12 d-flex flex-column flex-md-row my-4 px-2 px-md-3">
          <div className="col-12 col-md-5 d-flex justify-content-center ">
            <AddNewNote onAddNote={handleAddNote} />
          </div>
          <div className="col-12 col-md-7 mt-4 mt-md-0">
            <NoteStatus notes={notes} />
            <NoteList
              notes={sortedNotes}
              onCompleted={handleCompleteNote}
              onDelete={handleDelete}
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
