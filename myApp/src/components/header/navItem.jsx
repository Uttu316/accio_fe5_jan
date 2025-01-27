import { Link } from "react-router";

const NavItem = ({ to, label }) => {
  return (
    <Link to={to}>
      <li className="nav_item">{label}</li>
    </Link>
  );
};

export default NavItem;
