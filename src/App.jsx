import "./App.css";
import AddNewNote from "./components/addNewNote/addNewNote";
import NoteList from "./components/noteList/noteList";

function App() {
  return (
    <main className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="col-11   d-flex flex-column  rounded-4 shadow-lg note-container ">
        <section className="col-12 text-center note-header rounded-top-4 text-white fw-bold py-4 mb-3">
          header
        </section>
        <section className="col-12 d-flex my-4 px-2 px-sm-3">
          <div className="col-5 d-flex justify-content-center ">
            <AddNewNote />
          </div>
          <div className="col-7 ">
            <NoteList />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
