import Input from "../../common/input/Input";
import Textarea from "../../common/textarea/Textarea";

const NewComment = () => {
  return (
    <form>
      <fieldset className="">
        <Input />
        <Textarea />
      </fieldset>
    </form>
  );
};

export default NewComment;
