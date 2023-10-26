import { useState } from "react";
import "./dropDown.css";

const DropDown = ({ value, onClick, data, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="w-100dropDown"
      onClick={() => setIsOpen((isPrev) => !isPrev)}>
      <div className="w-100 d-flex border border-1 rounded-3 px-3 py-1 ">
        <input type="text" className="border-0" value={value || ""} readOnly />
        <span> l</span>
      </div>
      <ul className={`m-0 px-3 pt-2  ${!isOpen ? "d-none" : ""}`}>
        {data.map((item) => {
          return (
            <li className="mt-1" onClick={() => onClick(item)} key={item.id}>
              <span className="">{id === item.id ? "✓" : ""}</span>{" "}
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
