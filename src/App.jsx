import "./App.css";
import AddNewNote from "./components/addNewNote/addNewNote";

function App() {
  return (
    <main className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="col-12 col-sm-11 col-md-10 d-flex flex-column note-container p-4">
        <section className="col-12 text-center">header</section>
        <section className="col-12 d-flex ">
          <div className="col-5 d-flex justify-content-center align-items-center">
            <AddNewNote />
          </div>
          <div className="col-7 p-3">b</div>
        </section>
      </div>
    </main>
  );
}

export default App;
