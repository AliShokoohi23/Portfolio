import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiDotnet,
  SiSqlite,
  SiTypescript,
  SiArduino,
  SiHtml5,
  SiCss,
  SiDocker,
  SiFigma,
  SiFlutter,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "framer-motion";

const techItems = [
  { icon: <TbBrandCSharp />, name: "C#" },
  { icon: <SiDotnet />, name: ".NET" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiFlutter />, name: "Flutter" },
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiSqlite />, name: "SQLite" },
  { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiCss />, name: "CSS3" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiArduino />, name: "Arduino" },
  { icon: <SiFigma />, name: "Figma" },
];

function Techstack() {
  return (
    <div className="tech-grid">
      {techItems.map((item, index) => (
        <motion.div
          key={item.name}
          className="tech-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, y: -5, color: "var(--accent-light)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          {item.icon}
          <span>{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default Techstack;
