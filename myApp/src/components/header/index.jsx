import "./header.css";

const Header = (props) => {
  const { logo } = props;
  return (
    <header className="header">
      <h1 className="logo">{logo}</h1>
      <nav className="nav">
        <ul className="nav_items">
          <li className="nav_item">About</li>
          <li className="nav_item">Team</li>
          <li className="nav_item">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
