import Delete from "../icon/Delete";

const Comment = ({ bg, title, des, onClick }) => {
  return (
    <div
      className="comments w-100 mb-4 text-start p-3 shadow rounded-3"
      style={{ background: bg }}
    >
      <h3>{title}</h3>
      <p className="">{des}</p>
      <div className="w-100 d-flex justify-content-end bg-transparent">
        <button onClick={onClick} className="bg-transparent ">
          <Delete width="20px" height="20px" fill="#71717a" />
        </button>
      </div>
    </div>
  );
};

export default Comment;
