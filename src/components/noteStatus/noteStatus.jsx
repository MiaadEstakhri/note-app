const NoteStatus = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((event) => event.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  const notesList = [
    { title: "All", count: allNotes },
    { title: "Completed", count: completedNotes },
    { title: "Open", count: unCompletedNotes },
  ];

  if (!allNotes)
    return (
      <h2 className="text-center fw-bold not-notes h4">
        No Notes has already been added.
      </h2>
    );
  return (
    <ul className="d-flex justify-content-between px-4 mb-3">
      {notesList.map((item, index) => {
        return (
          <li
            className="d-flex justify-content-center align-items-center"
            key={index}>
            <span className="me-1 fw-bolder text-black-50 title-item__note">
              {item.title}
            </span>
            <span className="d-flex justify-content-center align-items-center border rounded-circle item-noteStatus fw-bold">
              {item.count}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteStatus;
