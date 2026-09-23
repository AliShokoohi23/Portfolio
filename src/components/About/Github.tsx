import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

function Github() {
  return (
    <motion.div
      className="github-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="section-header">
        <p className="section-label">Contributions</p>
        <h2 className="section-title">Days I Code</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <GitHubCalendar
          username="alishokoohi23"
          blockSize={13}
          blockMargin={5}
          fontSize={14}
          colorScheme="dark"
        />
      </div>
    </motion.div>
  );
}

export default Github;
