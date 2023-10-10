const AddNewNote = () => {
  return (
    <form className="d-flex flex-column align-items-center form-note me-3">
      <input
        type="text"
        placeholder="title note"
        className="col-11 col-md-12  border-0 rounded-3 py-2 px-3 fw-bolder input-note shadow-sm"
      />
      <textarea
        placeholder="title note"
        rows="4"
        cols="30"
        className="col-11 col-md-12 border-0 rounded-3 py-2 px-3 mt-3 fw-bolder input-note text-break shadow-sm"
      />
      <button
        type="submit"
        className="col-11 col-md-12 border-0 rounded-3 py-2 mt-4 fw-bold text-white btn-note shadow-sm">
        submit
      </button>
    </form>
  );
};

export default AddNewNote;
