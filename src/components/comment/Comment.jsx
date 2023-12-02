import { useState } from "react";
import Delete from "../../assets/icon/Delete";
import Input from "../../common/input/Input";
import Textarea from "../../common/textarea/Textarea";
import UpdateIcon from "../../assets/icon/Update";

const Comment = ({ bg, title, des, onRemove, className, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDes, setNewDes] = useState(des);

  const handleUpdate = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(newTitle, newDes);
    setIsEditing(false);
  };

  return (
    <div
      className={`w-100 h-100 d-flex flex-column justify-content-between mb-4 p-3 text-break shadow rounded-3 ${className} `}
      style={{ background: bg }}>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="">
          <fieldset className="update-form rounded-1 px-1">
            <Input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </fieldset>
          <fieldset className="update-form rounded-1 px-1">
            <Textarea
              value={newDes}
              onChange={(e) => setNewDes(e.target.value)}
            />
          </fieldset>
          <button type="submit" className="bg-transparent border-0 mt-1 ms-1">
            <UpdateIcon width="21px" height="21px" fill="#71717a" />
          </button>
        </form>
      ) : (
        <>
          <h3 className=" title fw-bold">{title}</h3>
          <p className="">{des}</p>
        </>
      )}
      <div className="w-100 h-100 d-flex justify-content-end bg-transparent">
        <button onClick={onRemove} className="bg-transparent border-0">
          <Delete width="20px" height="20px" fill="#71717a" />
        </button>
        {isEditing ? (
          ""
        ) : (
          <button
            onClick={handleUpdate}
            className="bg-transparent border-0 mt-1 ms-1">
            <UpdateIcon width="21px" height="21px" fill="#71717a" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
