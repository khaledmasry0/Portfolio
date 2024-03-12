import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import CV from "../../assets/Khaled-CV.pdf";
import "./About.css";

import AOS from "aos";
AOS.init({
  once: true,
});

const About = () => {
  return (
    <section className="About section_padding">
      <h2 className="main_heading">About Me</h2>
      <Container>
        <article className="About_Info" data-aos={"fade-up"}>
          <Row>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Name:</p>
              <p>Khaled Mohamed</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Age:</p>
              <p className="fontalt mt-1">26</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>Country:</p>
              <p>Egypt</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-3">
              <p>CV:</p>
              <a
                href="https://drive.google.com/file/d/1KdGogy3ACskXyWTJROIBbZdkZS2HibU2/view?usp=share_link"
                className="view custom_button"
                target="_blank"
                rel="noreferrer"
              >
                View
              </a>
              <a
                href={CV}
                className="view custom_button"
                rel="noreferrer"
                download
              >
                Download
              </a>
            </Col>
            <Col xs={12} md={6} className="col_info mb-0">
              <p>Phone:</p>
              <p className="fontalt mt-1">01011131316</p>
            </Col>
            <Col xs={12} md={6} className="col_info mb-0">
              <p>Gmail:</p>
              <p className="gmail">khaledmohamed3360@gmail.com</p>
            </Col>
          </Row>
        </article>
        <article className="qual_cont" data-aos={"fade-up"}>
          {/* <p>
            Hi , I'm a Front-end web developer with +<span>2</span> years of
            experience in building responsive web apps.
          </p> */}
          <p>
            Hi , I'm a Software developer specialized in frontend web
            development, driven by a passion for learning and applying more
            techniques in web development field. Has experience in developing
            creative website, using React.js and other technologies. Skilled in
            React.js, Typescript, Next.js HTML5, CSS, Sass, JS, OOP concepts,
            multi-threading. Experienced in working with agile methodologies and
            collaborating with cross-functional teams. having a keen eye for
            details and the ability to think outside the box when it comes to
            problem solving. I'm always eager to learn new technologies and stay
            up-to-date on the latest trends in the web development
          </p>
          <p>
            <span>2021</span>
            <FontAwesomeIcon icon={faHandPointRight} /> Graduated with a good
            grade , Bachelor's degree in Science, Cairo University.
          </p>
        </article>

        <article className="About_passion" data-aos={"fade-up"}>
          <p>
            I'm looking forward to building a long-term relationship with my
            clients. The programming is my Passion , I love to learn something
            new everyday
          </p>
          <p>
            <FontAwesomeIcon icon={faHandPointRight} /> And Finally , My
            favourite Sport is Chess
          </p>
        </article>
      </Container>
    </section>
  );
};

export default About;
