const AddNewNote = () => {
  return (
    <form className="d-flex flex-column justify-content-center align-items-center form-note me-3">
      <input
        type="text"
        placeholder="title note"
        className="col-11 col-md-12  border-0 rounded-2 py-2 px-3 fw-bolder input-note"
      />
      <textarea
        placeholder="title note"
        rows="4"
        cols="30"
        className="col-11 col-md-12 border-0 rounded-2 py-2 px-3 mt-3 fw-bolder input-note text-break"
      />
      <button
        type="submit"
        className="col-11 col-md-12 border-0 rounded-3 py-2 mt-4 fw-bold text-white btn-note ">
        submit
      </button>
    </form>
  );
};

export default AddNewNote;
