import Delete from "../../assets/icon/Delete";

const Comment = ({ bg, title, des, onRemove, className }) => {
  return (
    <div
      className={`w-100 h-100 d-flex flex-column justify-content-between  mb-4  p-3 text-break  shadow rounded-3 ${className} `}
      style={{ background: bg }}>
      <h3 className=" title fw-bold">{title}</h3>

      <p className="">{des}</p>
      <div className="w-100 d-flex justify-content-end bg-transparent">
        <button onClick={onRemove} className="bg-transparent border-0">
          <Delete width="20px" height="20px" fill="#71717a" />
        </button>
      </div>
    </div>
  );
};

export default Comment;
