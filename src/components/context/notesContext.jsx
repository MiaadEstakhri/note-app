import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext(null);
const NotesDispatchContext = createContext(null);

function notesReducer(notes, action) {
  switch (action.type) {
    case "addNote": {
      return [...notes, action.payload];
    }
    case "deleted": {
      return notes.filter((note) => note.id !== action.payload);
    }
    case "completeNote": {
      return notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }

    default:
      throw new Error("unknown error", action.type);
  }
}

export default function NotesProvider({ children }) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) throw new Error("error  NotesContext");
  return context;
}

export function useNotesDispatch() {
  const context = useContext(NotesDispatchContext);
  if (context === undefined) throw new Error("error NotesDispatchContext");
  return context;
}
