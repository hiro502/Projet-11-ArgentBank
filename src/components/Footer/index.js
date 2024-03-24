import "./style.css";

const Footer = ({ text }) => {
  return (
    <footer className="footer">
      <p className="footer-text">{text}</p>
    </footer>
  );
};

export default Footer;
