import Input from "../../common/input/Input";
import Textarea from "../../common/textarea/Textarea";
import "./newComment.css";
import { useState } from "react";

const NewComment = ({addHandler}) => {
  const [input, setInput] = useState("");
  const [textarea, setTextarea] = useState("");

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
    addHandler(input, textarea);
    setInput("");
    setTextarea("");
  };

  return (
    <form className="w-100 d-flex justify-content-end" onSubmit={submitHandler}>
      <fieldset
        className={`newComment d-flex flex-column justify-content-center align-items-center p-3 shadow rounded-3`}
      >
        <Input onChange={inputHandler} value={input} />
        <Textarea onChange={areaHandler} value={textarea} />
      </fieldset>
      <button type="submit">add</button>
    </form>
  );
};

export default NewComment;
