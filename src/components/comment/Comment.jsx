import "./comment.css";

const Comment = ({ title, des, background }) => {
  return (
    <div className={`${background} text-center `}>
      <h3>{title}</h3>
      <p>{des}</p>
    </div>
  );
};

export default Comment;
