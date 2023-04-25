import NavList from "../../common/navList/NavList";
import "./navigation.css";

const Navigation = ({ filterToDo, filterDoing, filterDone, filterAll }) => {
  return (
    <nav className="mb-4 py-3 d-flex justify-content-end align-items-center">
      <NavList title={"All"} bg={"#333"} onClick={filterAll} />
      <NavList title={"ToDo"} bg={"#fee2e2"} onClick={filterToDo} />
      <NavList title={"Doing"} bg={"#d9f99d"} onClick={filterDoing} />
      <NavList title={"Done"} bg={"#bbf7d0"} onClick={filterDone} />
    </nav>
  );
};

export default Navigation;
