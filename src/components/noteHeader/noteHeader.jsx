import DropDown from "../common/dropDown/dropDown";
const data = [
  { title: "Sort based on latest notes", value: "latest" },
  { title: "Sort based on earliest notes", value: "earliest" },
  { title: "Sort based on completed notes", value: "completed" },
];

const NoteHeader = ({ notes, onSort }) => {
  return (
    <div className="col-12 d-flex justify-content-center align-items-center">
      <h1 className="col-4 fw-bolder">My Notes( {notes.length} )</h1>
      <div className="col-3 ">
        <DropDown data={data} onClick={onSort} placeholder={"Sort..."} />
      </div>
    </div>
  );
};

export default NoteHeader;
