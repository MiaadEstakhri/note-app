import NavList from "../../common/navList/NavList";
import Color from "../../dataColor/Color";
import "./navigation.css";

const Navigation = ({ title, bg }) => {
  return (
    <nav className="mb-4 py-3 d-flex justify-content-end align-items-center">
      {Color.map((e) => {
        return <NavList title={e.text} bg={e.color} />;
      })}
    </nav>
  );
};

export default Navigation;
