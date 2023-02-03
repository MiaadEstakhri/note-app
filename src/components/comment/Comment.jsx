const Comment = ({ background, title, des }) => {
  return (
    <div
      className="comments w-100 mb-4 text-start p-3 shadow rounded-3"
      style={{ background: background }}
    >
      <h3>{title}</h3>
      <p className="">{des}</p>
    </div>
  );
};

export default Comment;
