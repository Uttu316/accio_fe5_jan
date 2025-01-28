import { Link } from "react-router";
import "./header.css";
import NavItem from "./navItem";

const Header = (props) => {
  const { logo } = props;
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">{logo}</Link>
      </h1>
      <nav className="nav">
        <ul className="nav_items">
          <NavItem to="/signin" label={"Signin"} />
          <NavItem to="/about" label={"About"} />
          <NavItem to="/team" label={"Team"} />
          <NavItem to="/contact" label={"Contact"} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
