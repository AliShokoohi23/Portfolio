import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

// Import images for each project (ensure these images exist in your Assets folder)
import computerSecurityImg from "../../Assets/computerSecurity.png";
import tradingAlgorithmImg from "../../Assets/tradingAlgorithm.png";
import reactivitiesImg from "../../Assets/reactivities.png";
import dslImg from "../../Assets/dsl.png";
import expensesManagementImg from "../../Assets/expensesManagement.png";
import GPT3 from "../../Assets/GPT-3.png";
import vgaESP32Img from "../../Assets/VGAESP32.png";
import dataScienceFinalProjectImg from "../../Assets/dataScience.png";
import findCommonFollowersImg from "../../Assets/findCommonFollowers.png";
import sample from "../../Assets/sample.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Computer Security */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={computerSecurityImg}
              isBlog={false}
              title="Computer Security"
              description="Implemented cryptographic algorithms for secure communication and authentication. Designed and tested encryption techniques for data protection. Tools: Python, Cryptography, OpenSSL, RSA, AES, Linux, Bash Script, Qt."
              ghLink="https://github.com/AliShokoohi23/Computer-Security"
              demoLink="" // Add a demo link if available
            />
          </Col>

          {/* Trading Algorithm */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tradingAlgorithmImg}
              isBlog={false}
              title="Trading Algorithm"
              description="Developed a cryptocurrency portfolio optimization algorithm using time series analysis and implemented the Black-Litterman model. Enhanced trading strategy using volatility prediction techniques. Tools: Python, Pandas, NumPy, Scikit-learn, Backtrader, Trading View, Pine Script, Matplot."
              ghLink="https://github.com/AliShokoohi23/Trading-Algorithm"
              demoLink=""
            />
          </Col>

          {/* Reactivities */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactivitiesImg}
              isBlog={false}
              title="Reactivities"
              description="A full-stack social networking platform enabling event-based interactions with features like real-time messaging, notifications, and user authentication. Tools: C#, .NET, Entity Framework, PostgreSQL, React.js, TypeScript, Semantic UI."
              ghLink="https://github.com/AliShokoohi23/Reactivities"
              demoLink=""
            />
          </Col>

          {/* DSL */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dslImg}
              isBlog={false}
              title="DSL"
              description="Designed a Domain-Specific Language for automated data analysis. Developed syntax and parsing logic for user-friendly scripting. Tools: Python, ANTLR, Pandas, AST Parsing."
              ghLink="https://github.com/AliShokoohi23/DSL"
              demoLink=""
            />
          </Col>

          {/* Expenses-Management */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expensesManagementImg}
              isBlog={false}
              title="Expenses-Management"
              description="A web-based expense tracking application for personal and business finance management. Integrated budget forecasting and visualization tools. Tools: React, TypeScript, Vanilla CSS."
              ghLink="https://github.com/AliShokoohi23/Expenses-Management"
              demoLink="https://smart-expenses-management.vercel.app/"
            />
          </Col>

          {/* GPT3-Landing-Page */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GPT3}
              isBlog={false}
              title="GPT3-Landing-Page"
              description="A modern, responsive landing page for showcasing AI-powered GPT-3 features. Tools: React.js, Bootstrap, SCSS."
              ghLink="https://github.com/AliShokoohi23/GPT3-Landing-Page"
              demoLink="https://gpt3-official-landing.vercel.app/"
            />
          </Col>

          {/* IUST-LC-Final-Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sample}
              isBlog={false}
              title="IUST-LC-Final-Project"
              description="Designed a library management system digital logic circuit using Proteus for sequential and combinational logic operations. Implemented flip-flops and state machines for data processing. Tools: Proteus, Logical Circuits."
              ghLink="https://github.com/AliShokoohi23/IUST-LC-Final-Project"
              demoLink=""
            />
          </Col>

          {/* VGA-ESP32 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vgaESP32Img}
              isBlog={false}
              title="VGA-ESP32"
              description="Developed an attendance system interface displayed via VGA using an ESP32 microcontroller. Implemented MQTT communication between the server and client. Tools: ESP32, Bitluni, LVGL, MQTT, Arduino, C++."
              ghLink="https://github.com/lAmiR1HosseiNl/VGA-ESP32"
              demoLink=""
            />
          </Col>

          {/* Data Science Final Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataScienceFinalProjectImg}
              isBlog={false}
              title="Data Science Final Project"
              description="Implemented machine learning models to predict movie box office revenue. Conducted exploratory data analysis and applied Random Forest and Linear Regression techniques. Tools: Python, Pandas, NumPy, Seaborn, Scikit-learn, Matplotlib, Plotly."
              ghLink="https://github.com/lAmiR1HosseiNl/Data_Science_Final_Project"
              demoLink=""
            />
          </Col>

          {/* Find Common Followers */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={findCommonFollowersImg}
              isBlog={false}
              title="Find Common Followers"
              description="A tool to analyze and find common followers between different GitHub profiles."
              ghLink="https://github.com/AliShokoohi23/Find-Common-Followers"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
