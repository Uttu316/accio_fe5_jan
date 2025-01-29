import { useNavigate } from "react-router";
import rlogo from "../../assets/react.svg";
import { isLoggedIn, logoutUser } from "../../utils/authUtil";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const isLogin = isLoggedIn();
  const onLogout = () => {
    logoutUser();
    navigate("/signin", { replace: true });
  };
  return (
    <footer className="footer">
      <p className="footer_txt">
        Made By React <img className="footer_img" alt="react" src={rlogo} />{" "}
        {isLogin && <button onClick={onLogout}>Logout</button>}
      </p>
    </footer>
  );
};
export default Footer;
