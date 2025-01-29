import { Link } from "react-router";
import "./header.css";
import NavItem from "./navItem";
import { isLoggedIn } from "../../utils/authUtil";

const Header = (props) => {
  const { logo } = props;
  const isLogIn = isLoggedIn();
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">{logo}</Link>
      </h1>
      <nav className="nav">
        <ul className="nav_items">
          {!isLogIn && <NavItem to="/signin" label={"Signin"} />}
          {isLogIn && <NavItem to="/inbox" label={"Inbox"} />}
          <NavItem to="/about" label={"About"} />
          <NavItem to="/team" label={"Team"} />
          <NavItem to="/contact" label={"Contact"} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
