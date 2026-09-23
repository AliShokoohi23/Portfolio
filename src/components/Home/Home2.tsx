import myImg from "../../Assets/avatar.svg";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Parallax } from "react-scroll-parallax";

function Home2() {
  return (
    <div className="introduce-section">
      <div className="introduce-inner">
        <motion.div
          className="introduce-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>
            Let Me <span>Introduce</span> Myself
          </h2>
          <p>
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
          </p>
          <p>
            I am fluent in <span className="highlight">Python, C#, and JavaScript/TypeScript</span>.
            My interests span building modern <span className="highlight">Web Technologies & Products</span> and
            exploring <span className="highlight">Artificial Intelligence</span>.
          </p>
          <p>
            Whenever possible, I also apply my passion for developing products
            with <span className="highlight">.NET Core, React.js, Flutter, and Python</span>.
          </p>

          <div className="socials-row">
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
        </motion.div>

        <Parallax speed={5}>
          <motion.div
            className="introduce-avatar"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} glareEnable glareMaxOpacity={0.1}>
              <img src={myImg} alt="avatar" />
            </Tilt>
          </motion.div>
        </Parallax>
      </div>
    </div>
  );
}

export default Home2;
