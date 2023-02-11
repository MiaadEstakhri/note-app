import { useState } from "react";
import "./sidebarBg.css";

const color = [
  { id: 1, text: "ToDo", color: "#fee2e2" },
  { id: 2, text: "Doing", color: "#d9f99d" },
  { id: 3, text: "Done", color: "#bbf7d0" },
];

const SidebarBg = ({ bg, setBg }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <div className="w-100 d-flex flex-column position-relative">
      <span onClick={toggleOpen}>color</span>
      <div
        className={`sidebar d-flex flex-column position-absolute bg-white rounded-2 p-3 ${
          open ? "d-flex" : "d-none"
        }`}
      >
        {color.map((e) => {
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
