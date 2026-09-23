import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import homeLogo from "../../Assets/home-main.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Parallax } from "react-scroll-parallax";

function Home() {
  return (
    <section>
      <div className="hero">
        <Particle />
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Available for opportunities
            </div>

            <h1>
              Hi, I'm{" "}
              <span className="gradient-text">Ali Shokoohi</span>
              <span className="wave" role="img" aria-label="wave"> 👋🏻</span>
            </h1>

            <div className="typewriter-wrapper" style={{ marginBottom: 24 }}>
              <Type />
            </div>

            <p className="hero-description">
              Computer Engineering student at Iran University of Science and Technology,
              passionate about building modern web & mobile applications, exploring AI,
              and creating secure, scalable software solutions.
            </p>

            <div className="hero-cta">
              <Link to="/project" className="btn-primary">
                View My Work →
              </Link>
              <Link to="/resume" className="btn-secondary">
                Download Resume
              </Link>
            </div>

            <div className="hero-socials">
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

          <Parallax speed={-10}>
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={homeLogo} alt="Developer illustration" />
            </motion.div>
          </Parallax>
        </div>
      </div>

      <Home2 />
    </section>
  );
}

export default Home;
