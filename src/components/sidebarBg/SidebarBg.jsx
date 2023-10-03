import { useState } from "react";
import ColorPalette from "../../assets/icon/ColorPalette";
import { COLOR_SIDEBAR } from "../../utils/constant/colorSidebar";
import "./sidebarBg.css";

const SidebarBg = ({ bg, setBg }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="d-flex flex-column position-relative">
      <span onClick={toggleOpen}>
        <ColorPalette width="30px" height="30px" fill="#71717a" />
      </span>
      <div
        className={`sidebar d-flex flex-column position-absolute bg-white rounded-2 p-3 ${
          open ? "d-flex" : "d-none"
        }`}>
        {COLOR_SIDEBAR.map((e, index) => {
          return (
            <div className="d-flex" key={index}>
              <div
                value={bg}
                onClick={() => {
                  setBg(e.color);
                  setOpen(false);
                }}
                className="box rounded-circle mx-2"
                style={{ background: e.color }}></div>
              <p className=" fw-bold">{e.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarBg;
