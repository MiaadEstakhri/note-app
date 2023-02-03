const Comment = ({ background, title, des, onClick }) => {
  return (
    <div
      className="comments w-100 mb-4 text-start p-3 shadow rounded-3"
      style={{ background: background }}
    >
      <h3>{title}</h3>
      <p className="">{des}</p>
      <div className="w-100 d-flex justify-content-end">
        <button onClick={onClick} className=" ">
          delete
        </button>
      </div>
    </div>
  );
};

export default Comment;
