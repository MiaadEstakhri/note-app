import { useState } from "react";
import "./App.css";
import AddNewNote from "./components/addNewNote/addNewNote";
import NoteList from "./components/noteList/noteList";
import NoteStatus from "./components/noteStatus/noteStatus";

function App() {
  const [notes, setNotes] = useState([]);

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

  return (
    <main className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="col-11 col-xl-9   d-flex flex-column  rounded-4 shadow-lg note-container ">
        <section className="col-12 text-center note-header rounded-top-4 text-white fw-bold py-4 mb-3">
          header
        </section>
        <section className="col-12 d-flex flex-column flex-md-row my-4 px-2 px-md-3">
          <div className="col-12 col-md-5 d-flex justify-content-center ">
            <AddNewNote onAddNote={handleAddNote} />
          </div>
          <div className="col-12 col-md-7 mt-4 mt-md-0">
            <NoteStatus notes={notes} />
            <NoteList
              notes={notes}
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
