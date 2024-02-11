import { Children, createContext, useContext } from "react";

const NotesContext = createContext(null);
export function NotesProvider({ children }) {
  return <NotesContext.Provider>{children}</NotesContext.Provider>;
}
