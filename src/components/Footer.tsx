import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-text">
          © {year} Ali Shokoohi. Built with React & Framer Motion.
        </p>
        <div className="footer-socials">
          <a href="https://github.com/alishokoohi23" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/ali-shokoohi-54a5182b7/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://www.instagram.com/ali_.shokoohi" target="_blank" rel="noreferrer">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
