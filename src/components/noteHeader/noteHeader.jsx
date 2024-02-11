import { useNotes } from "../context/notesContext";
import DropDown from "../common/dropDown/dropDown";

const data = [
  { title: "Sort based on latest notes", value: "latest" },
  { title: "Sort based on earliest notes", value: "earliest" },
  { title: "Sort based on completed notes", value: "completed" },
];

const NoteHeader = ({ onSort, selected }) => {
  const notes = useNotes();
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <h1 className="col-5 fw-bolder ">My Notes( {notes.length} )</h1>
      <div className="col-3">
        <DropDown
          data={data}
          onClick={onSort}
          placeholder={"Sort..."}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default NoteHeader;
