import NavList from "../../common/navList/NavList";
import "./navigation.css";

const Navigation = ({ title, bg }) => {
  return (
    <nav className="mb-4 d-flex justify-content-center align-items-center">
      <NavList title={title} bg={bg} />
    </nav>
  );
};

export default Navigation;
