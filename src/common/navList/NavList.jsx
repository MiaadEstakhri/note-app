const NavList = ({ title, bg, onClick }) => {
  return (
    <li
      className="d-flex align-items-center justify-content-center ms-3"
      onClick={onClick}>
      {title}
      <span
        className="d-inline-block rounded-circle ms-2"
        style={{ background: bg }}></span>
    </li>
  );
};

export default NavList;
