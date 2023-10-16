import { useState } from "react";

const AddNewNote = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title && !description) return null;
    const newNote = {
      title,
      description,
      completed: false,
      id: Date.now(),
      createAt: new Date().toISOString(),
    };
    setTitle("");
    setDescription("");
    setNotes((prevState) => [...prevState, newNote]);
  };

  return (
    <div>
      <h2 className="text-center fw-bold mb-4 h3 title-note">Add New Note</h2>
      <form
        className="d-flex flex-column align-items-center form-note me-3"
        onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="title note"
          className="col-11 col-md-12  border-0 rounded-3 py-2 px-3 fw-bolder input-note shadow-sm"
          required
        />
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="title note"
          rows="4"
          cols="30"
          required
          className="col-11  col-md-12 border-0 rounded-3 py-2 px-3 mt-3 fw-bolder input-note text-break shadow-sm"
        />
        <button
          type="submit"
          className="col-11 col-md-12 border-0 rounded-3 py-2 mt-4 fw-bold text-white btn-note shadow-sm">
          submit
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
