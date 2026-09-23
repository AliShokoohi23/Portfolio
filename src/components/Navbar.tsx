import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiFillGithub } from "react-icons/ai";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsSun, BsMoon, BsDisplay } from "react-icons/bs";
import logo from "../Assets/logo.jpg";

type ThemeMode = 'system' | 'light' | 'dark';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>('system');
  const location = useLocation();

  // Apply theme to document
  useEffect(() => {
    const applyTheme = (mode: ThemeMode) => {
      if (mode === 'system') {
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        document.documentElement.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', mode);
      }
    };

    applyTheme(theme);

    // Listen for system theme changes if in system mode
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = () => {
      if (theme === 'system') applyTheme('system');
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  // Handle scroll for navbar resize and blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path ? "active" : "";

  const toggleTheme = () => {
    if (theme === 'system') setTheme('dark');
    else if (theme === 'dark') setTheme('light');
    else setTheme('system');
  };

  const getThemeIcon = () => {
    if (theme === 'system') return <BsDisplay title="System Theme" />;
    if (theme === 'dark') return <BsMoon title="Dark Theme" />;
    return <BsSun title="Light Theme" />;
  };

  return (
    <nav className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Logo" style={{ height: "40px", borderRadius: "8px" }} />
        </Link>

        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={isActive("/")} onClick={() => setMenuOpen(false)}>
              <AiOutlineHome style={{ marginBottom: 2 }} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={isActive("/about")} onClick={() => setMenuOpen(false)}>
              <AiOutlineUser style={{ marginBottom: 2 }} /> About
            </Link>
          </li>
          <li>
            <Link to="/project" className={isActive("/project")} onClick={() => setMenuOpen(false)}>
              <AiOutlineFundProjectionScreen style={{ marginBottom: 2 }} /> Projects
            </Link>
          </li>
          <li>
            <Link to="/resume" className={isActive("/resume")} onClick={() => setMenuOpen(false)}>
              <CgFileDocument style={{ marginBottom: 2 }} /> Resume
            </Link>
          </li>
          <li>
            <button 
              onClick={toggleTheme} 
              style={{
                background: "none", border: "none", color: "var(--text-secondary)", 
                cursor: "pointer", fontSize: "1.1rem", padding: "8px", 
                display: "flex", alignItems: "center"
              }}
            >
              {getThemeIcon()}
            </button>
          </li>
          <li>
            <a
              href="https://github.com/alishokoohi23"
              target="_blank"
              rel="noreferrer"
              className="nav-github-btn"
            >
              <AiFillGithub /> GitHub
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
