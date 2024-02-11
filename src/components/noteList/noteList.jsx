import React from "react";
import TrashIcon from "../../assets/icons/trashIcon";
import { useNotes, useNotesDispatch } from "../context/notesContext";

const NoteList = ({ sortBy }) => {
  const dispatch = useNotesDispatch();
  const notes = useNotes();

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createAt) - new Date(b.createAt)
    );
  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createAt) - new Date(a.createAt)
    );
  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <ul className="w-100 overflow-auto px-3">
      {sortedNotes.map(({ id, title, description, completed, createAt }) => {
        return (
          <li
            className={`w-100 input-note py-2  px-3 rounded-3 shadow-sm mb-3  ${
              completed ? "opacity-75 " : ""
            }`}
            key={id}>
            <h5
              className={`text-capitalize fw-bold ${
                completed ? "text-decoration-line-through" : ""
              }`}>
              {title}
            </h5>
            <div className="w-100 d-flex justify-content-between ">
              <span className="text-break text-capitalize text-muted">
                {description}
              </span>
              <div className="d-flex align-items-end  justify-content-center">
                <input
                  type="checkbox"
                  name={id}
                  id={id}
                  value={id}
                  checked={completed}
                  onChange={(event) => {
                    const noteId = Number(event.target.value);
                    dispatch({ type: "completeNote", payload: noteId });
                  }}
                  className="mb-1 me-2 ms-3"
                />
                <button
                  className="border-0 bg-transparent "
                  onClick={() => {
                    dispatch({ type: "deleted", payload: id });
                  }}>
                  <TrashIcon color="#DC2626" size={20} />
                </button>
              </div>
            </div>
            <div className="border m-2 "></div>
            <div className="w-100 text-center text-black-50 my-1 date-note">
              {new Date(createAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;
