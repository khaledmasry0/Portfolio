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
            Hi , I'm a Front-end web developer with <span>1</span>+ years of
            experience in building responsive web apps.
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
