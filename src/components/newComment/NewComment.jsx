import { useState } from "react";
import Input from "../../common/input/Input";
import Textarea from "../../common/textarea/Textarea";
import SaveIcon from "../../assets/icon/SaveIcon";
import SidebarBg from "../sidebarBg/SidebarBg";
import "./newComment.css";

const NewComment = ({ onAddNote }) => {
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
    onAddNote(input, textarea, bg);
    setInput("");
    setTextarea("");
    setBg("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={`new-comment d-flex flex-column justify-content-center align-items-center p-3 shadow rounded-3 `}
      style={{ background: bg ? bg : "#fee2e2" }}>
      <Input onChange={inputHandler} value={input} />
      <Textarea onChange={areaHandler} value={textarea} />
      <div className="w-100 d-flex  justify-content-end">
        <SidebarBg bg={bg} setBg={setBg} />
        <button className="border-0 bg-transparent mx-4 ">
          <SaveIcon width="30px" height="30px" fill="#71717a" />
        </button>
      </div>
    </form>
  );
};

export default NewComment;
