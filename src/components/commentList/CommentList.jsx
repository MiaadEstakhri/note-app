import "./commentList.css";
import Comment from "../comment/Comment";

const CommentList = ({ comments, removeHandler }) => {
  if (comments.length === 0) {
    return (
      <div className="w-100 d-flex justify-content-center  align-items-center my-3">
        <h4 className="">Not Comment</h4>
      </div>
    );
  }
  return comments.map((e) => {
    return (
      <Comment
        key={e.id}
        title={e.title}
        des={e.des}
        bg={e.bg || "#fee2e2"}
        onClick={() => removeHandler(e.id)}
      />
    );
  });
};

export default CommentList;
