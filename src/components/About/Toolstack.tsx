import {
  SiPostman,
  SiUbuntu,
  SiKalilinux,
} from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoVisualStudio } from "react-icons/bi";
import { motion } from "framer-motion";

const toolItems = [
  { icon: <FaWindows />, name: "Windows" },
  { icon: <SiUbuntu />, name: "Ubuntu" },
  { icon: <SiKalilinux />, name: "Kali Linux" },
  { icon: <DiVisualstudio />, name: "VS" },
  { icon: <BiLogoVisualStudio />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
];

function Toolstack() {
  return (
    <div className="tech-grid">
      {toolItems.map((item, index) => (
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

export default Toolstack;
