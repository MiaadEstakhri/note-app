import { useState } from "react";

import ChevronDownIcon from "../../../assets/icons/chevronDownIcon";
import ChevronUpIcon from "../../../assets/icons/chevronUpIcon";
import CheckIcon from "../../../assets/icons/checkIcon";

const DropDown = ({ onClick, data, selected, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div
      className="w-100 position-relative dropDown"
      onClick={() => setIsOpen((isPrev) => !isPrev)}>
      <div
        className={`w-100 d-flex justify-content-between align-items-center  ${
          isOpen
            ? "rounded-top-3  border-bottom-0"
            : "rounded-3 border border-1"
        } px-3 py-2 dropDown__container`}>
        <input
          type="text"
          className="w-100 border-0 bg-transparent fw-bold"
          value={value}
          placeholder={placeholder}
          readOnly
        />
        <span className="">
          {isOpen ? (
            <ChevronDownIcon color="#172554" size={18} />
          ) : (
            <ChevronUpIcon color="#172554" size={18} />
          )}
        </span>
      </div>
      {isOpen && (
        <ul className="w-100 m-0 text-start pt-2 pb-3 position-absolute rounded-bottom-3">
          {data.map((item, index) => {
            return (
              <li
                className="mt-1  position-relative"
                onClick={() => {
                  setValue(item.title), onClick(item);
                }}
                key={index}>
                <span className="position-absolute end-100 me-1">
                  {selected === item.value ? (
                    <CheckIcon color="#172554" size={18} />
                  ) : (
                    ""
                  )}
                </span>
                <span className="">{item.title}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
