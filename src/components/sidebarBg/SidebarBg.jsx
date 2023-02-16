import { useState } from "react";
import ColorPalette from "../icon/ColorPalette";
import Color from "../../dataColor/Color";
import "./sidebarBg.css";

const SidebarBg = ({ bg, setBg }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="w-100 d-flex flex-column position-relative">
      <span onClick={toggleOpen}>
        <ColorPalette width="30px" height="30px" fill="#71717a" />
      </span>
      <div
        className={`sidebar d-flex flex-column position-absolute bg-white rounded-2 p-3 ${
          open ? "d-flex" : "d-none"
        }`}
      >
        {Color.map((e) => {
          return (
            <div className="d-flex" key={e.id}>
              <div
                value={bg}
                onClick={() => setBg(e.color)}
                className="box rounded-circle mx-2"
                style={{ background: e.color }}
              ></div>
              <p className=" fw-bold">{e.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SidebarBg;
