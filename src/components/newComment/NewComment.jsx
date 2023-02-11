import { useState } from "react";
import Input from "../../common/input/Input";
import Textarea from "../../common/textarea/Textarea";
import SaveIcon from "../icon/SaveIcon";
import SidebarBg from "../sidebarBg/SidebarBg";
import "./newComment.css";

const NewComment = ({ addHandler }) => {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");
  const [bg, setBg] = useState("");
  const inputHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const areaHandler = (e) => {
    const value = e.target.value;
    setTextarea(value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addHandler(input, textarea, bg);
    setInput("");
    setTextarea("");
    setBg("");
  };

  return (
    <form
      className="w-100 d-flex flex-column align-items-end "
      onSubmit={submitHandler}
    >
      <fieldset
        className={`newComment d-flex flex-column justify-content-center align-items-center p-3 shadow rounded-3`}
      >
        <Input onChange={inputHandler} value={input} />
        <Textarea onChange={areaHandler} value={textarea} />
        <div className="d-flex ">
          <SidebarBg bg={bg} setBg={setBg} />
          <button className="mx-4 " type="submit">
            <SaveIcon width="30px" height="30px" fill=#71717a" />
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default NewComment;
