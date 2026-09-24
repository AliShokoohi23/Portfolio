import { useState, useEffect } from "react";

import Particle from "../Particle";
import pdf from "../../Assets/AliShokoohi-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { motion } from "framer-motion";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-section" style={{ position: "relative" }}>
      <Particle />
      <motion.div
        className="resume-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Resume</p>
          <h1 className="section-title">My Resume</h1>
        </div>

        <a className="resume-download-btn" href={pdf} target="_blank" rel="noreferrer">
          <AiOutlineDownload /> Download Resume
        </a>

        <div className="resume-viewer">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        </div>

        <a className="resume-download-btn" href={pdf} target="_blank" rel="noreferrer">
          <AiOutlineDownload /> Download Resume
        </a>
      </motion.div>
    </div>
  );
}

export default ResumeNew;
