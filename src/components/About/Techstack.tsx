import { Col, Row } from "react-bootstrap";
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
  SiCss3,
  SiDocker,
  SiAdobephotoshop,
  SiProteus
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

import { TbBrandCSharp } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSqlite />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCss3  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiProteus  />
      </Col>
    </Row>
  );
}

export default Techstack;
