import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Qualification.css";

import AOS from "aos";
AOS.init({
  once: true,
});

const Qualification = () => {
  const route = useNavigate();
  return (
    <section className="Qualification section_padding" data-aos={"fade-up"}>
      <h2 className="main_heading">Qualification</h2>
      <Container>
        <article className="qual_cont">
          <p>
            I'm a Software developer specialized in frontend web development
            with +<span>2</span> years of experience, driven by a passion for
            learning and applying more techniques in web development field. Has
            experience in developing creative website, using React.js and other
            technologies. Skilled in React.js, Typescript, Next.js HTML5, CSS,
            Sass, JS, OOP concepts, multi-threading. Experienced in working with
            agile methodologies and collaborating with cross-functional teams.
            having a keen eye for details and the ability to think outside the
            box when it comes to problem solving. I'm always eager to learn new
            technologies and stay up-to-date on the latest trends in the web
            development
          </p>
          <p>
            <span>2021</span>
            <FontAwesomeIcon icon={faHandPointRight} /> Graduated with a good
            grade , Bachelor's degree in Science, Cairo University.
          </p>
          <button className="custom_button" onClick={() => route("/About")}>
            See More
          </button>
        </article>
      </Container>
    </section>
  );
};
export default Qualification;
