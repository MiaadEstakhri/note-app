const NavList = ({ onClick, comments }) => {
  const allCount = comments.length;
  const toDoCount = comments.filter((item) => item.bg === "#fee2e2").length;
  const doingCount = comments.filter((item) => item.bg === "#d9f99d").length;
  const doneCount = comments.filter((item) => item.bg === "#bbf7d0").length;
  const COMMENT_LIST = [
    { title: "All", bg: "#333", count: allCount },
    { title: "ToDo", bg: "#fee2e2", count: toDoCount },
    { title: "Doing", bg: "#d9f99d", count: doingCount },
    { title: "Done", bg: "#bbf7d0", count: doneCount },
  ];
  return (
    <nav className="d-flex justify-content-center align-items-center py-2">
      <ul className="d-flex gap-3 fw-bold m-3">
        {COMMENT_LIST.map((item, index) => {
          return (
            <li
              className="d-flex align-items-center justify-content-center me-3"
              key={index}
              onClick={() => onClick(item.bg)}>
              {item.title}
              <span
                className={`d-flex justify-content-center align-items-center rounded-circle ms-2 ${
                  item.bg === "#333" ? "text-white" : "text-black"
                } `}
                style={{ background: item.bg }}>
                {item.count}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavList;
