import { Children, createContext, useContext } from "react";

const NotesContext = createContext(null);
export function NotesProvider({ children }) {
  return <NotesContext.Provider>{children}</NotesContext.Provider>;
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (context === undefined) throw new Error("error in context");
  return context;
}
