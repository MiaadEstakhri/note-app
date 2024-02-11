import { useState } from "react";
import NotesProvider from "./components/context/notesContext";
import AddNewNote from "./components/addNewNote/addNewNote";
import NoteList from "./components/noteList/noteList";
import NoteStatus from "./components/noteStatus/noteStatus";
import NoteHeader from "./components/noteHeader/noteHeader";
import "./App.css";

function App() {
  const [sortBy, setSortBy] = useState("latest");

  const clickSortHandler = (item) => {
    setSortBy(item.value);
  };

  return (
    <NotesProvider>
      <main className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="col-11 col-xl-9   d-flex flex-column  rounded-4 shadow-lg note-container ">
          <section className="col-12 d-flex justify-content-center align-items-center text-center note-header rounded-top-4 text-white  py-4 mb-3">
            <NoteHeader onSort={clickSortHandler} selected={sortBy} />
          </section>
          <section className="col-12 d-flex flex-column flex-md-row my-4 px-2 px-md-3">
            <div className="col-12 col-md-5 d-flex justify-content-center ">
              <AddNewNote />
            </div>
            <div className="col-12 col-md-7 mt-4 mt-md-0">
              <NoteStatus />
              <NoteList sortBy={sortBy} />
            </div>
          </section>
        </div>
      </main>
    </NotesProvider>
  );
}

export default App;
