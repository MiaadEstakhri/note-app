const NavList = ({ title, bg }) => {
  return (
    <ul className="w-100 d-flex align-items-center justify-content-end me-4 fw-bold">
      <li className="d-flex align-items-center justify-content-center ms-5">
        {title}
        <span
          className="d-inline-block bg-black rounded-circle ms-2"
          style={{ background: bg }}
          ms-2
        ></span>
      </li>
    </ul>
  );
};

export default NavList;
