import Input from "../../common/input/Input";
import Textarea from "../../common/textarea/Textarea";
import "./newComment.css";

const NewComment = () => {
  return (
    <form className="w-100 d-flex justify-content-end">
      <fieldset
        className={`newComment d-flex flex-column justify-content-center align-items-center p-3 shadow rounded-3`}
      >
        <Input />
        <Textarea />
      </fieldset>
    </form>
  );
};

export default NewComment;
