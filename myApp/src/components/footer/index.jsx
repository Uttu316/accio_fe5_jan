import rlogo from "../../assets/react.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer_txt">
        Made By React <img className="footer_img" alt="react" src={rlogo} />
      </p>
    </footer>
  );
};
export default Footer;
