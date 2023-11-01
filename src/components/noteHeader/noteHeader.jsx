const NoteHeader = ({ notes }) => {
  return (
    <div>
      <h1 className="fw-bolder">My Notes( {notes.length} )</h1>
    </div>
  );
};

export default NoteHeader;
