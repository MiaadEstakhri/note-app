const NavList = ({ title, bg, onClick }) => {
  return (
    <ul className=" d-flex align-items-center justify-content-end me-4 fw-bold">
      <li
        className="d-flex align-items-center justify-content-center ms-3"
        onClick={onClick}
      >
        {title}
        <span
          className="d-inline-block rounded-circle ms-2"
          style={{ background: bg }}
        ></span>
      </li>
    </ul>
  );
};

export default NavList;
