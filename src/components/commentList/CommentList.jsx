import "./commentList.css";
import Comment from "../comment/Comment";

const CommentList = ({ comments, removeHandler }) => {
  if (comments.length === 0) {
    return <h4>Not Comment</h4>;
  }
  return comments.map((e) => {
    return (
      <Comment
        key={e.id}
        title={e.title}
        des={e.des}
        background={e.background}
        onClick={() => removeHandler(e.id)}
      />
    );
  });
};

export default CommentList;
