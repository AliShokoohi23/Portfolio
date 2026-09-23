import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="about-card">
      <p>
        Hi Everyone, I am <span className="highlight">Ali Shokoohi</span> from{" "}
        <span className="highlight">Tehran, Iran</span>.
      </p>
      <p>
        I am a Computer Engineering student at{" "}
        <span className="highlight">Iran University of Science and Technology</span>.
        My journey in software development has taken me through full-stack web apps,
        cross-platform mobile development, machine learning, and cybersecurity.
      </p>
      <p>
        I've worked as a Software Developer at Megamouj-e Iranian building C# applications,
        and served as a Teaching Assistant for the Data Communication course.
      </p>

      <div className="about-activities">
        <h4>Apart from coding, I enjoy:</h4>
        <ul>
          <li><ImPointRight /> Playing Games</li>
          <li><ImPointRight /> Listening to Music</li>
          <li><ImPointRight /> Travelling</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutCard;
