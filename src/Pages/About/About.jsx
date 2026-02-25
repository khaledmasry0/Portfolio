import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faGraduationCap,
  faLanguage,
  faDownload,
  faExternalLinkAlt,
  faCalendarAlt,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { data } from "../../constants";
import { ParticleField } from "../../components/3d";
import CV from "../../assets/khaled_Mohamed_FE.pdf";
import "./About.css";

const getAge = (birthdate) => {
  const today = new Date();
  const birth = new Date(birthdate);
  let age = today.getFullYear() - birth.getFullYear();
  const m = today.getMonth() - birth.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
  return age;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const { personalInfo, education } = data;

const About = () => {
  return (
    <section className="about section_padding">
      <ParticleField intensity="light" showRings showStars={false} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main_heading">
            About <span>Me</span>
          </h2>
        </motion.div>

        <Container>
          <motion.div
            className="about_bio glass_card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="about_bio_header">
              <h3 className="gradient_text">{personalInfo.name}</h3>
              <p className="about_title">{personalInfo.title}</p>
            </div>
            <p className="about_description">{personalInfo.bio}</p>
            <div className="about_cta">
              <a
                href="https://drive.google.com/file/d/1McE331p3h_b-0e8AF80Cx98Fmj21H3JO/view?usp=sharing"
                className="custom_button"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} /> View CV
              </a>
              <a href={CV} className="custom_button" rel="noreferrer" download>
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about_info_grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="about_info_card glass_card" variants={itemVariants}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="info_icon" />
              <div>
                <p className="info_label">Location</p>
                <p className="info_value">{personalInfo.location}</p>
              </div>
            </motion.div>
            <motion.div className="about_info_card glass_card" variants={itemVariants}>
              <FontAwesomeIcon icon={faCalendarAlt} className="info_icon" />
              <div>
                <p className="info_label">Age</p>
                <p className="info_value">{getAge(personalInfo.birthdate)} years old</p>
              </div>
            </motion.div>
            <motion.div className="about_info_card glass_card" variants={itemVariants}>
              <FontAwesomeIcon icon={faPhone} className="info_icon" />
              <div>
                <p className="info_label">Phone</p>
                <a href={`tel:${personalInfo.phone}`} className="info_value">
                  {personalInfo.phone}
                </a>
              </div>
            </motion.div>
            <motion.div className="about_info_card glass_card" variants={itemVariants}>
              <FontAwesomeIcon icon={faEnvelope} className="info_icon" />
              <div>
                <p className="info_label">Email</p>
                <a href={`mailto:${personalInfo.email}`} className="info_value">
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>
            <motion.div className="about_info_card glass_card" variants={itemVariants}>
              <FontAwesomeIcon icon={faLinkedinIn} className="info_icon" />
              <div>
                <p className="info_label">LinkedIn</p>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="info_value"
                >
                  View Profile
                </a>
              </div>
            </motion.div>
            <motion.div className="about_info_card glass_card" variants={itemVariants}>
              <FontAwesomeIcon icon={faBriefcase} className="info_icon" />
              <div>
                <p className="info_label">Experience</p>
                <p className="info_value">5+ Years</p>
              </div>
            </motion.div>
          </motion.div>

          <Row className="about_bottom_row">
            <Col xs={12} lg={7}>
              <motion.div
                className="about_education"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="about_section_title">
                  <FontAwesomeIcon icon={faGraduationCap} /> Education
                </h3>
                <div className="education_list">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      className="education_item glass_card"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <div className="education_dot" />
                      <div className="education_content">
                        <h4>{edu.title}</h4>
                        <p className="education_institution">{edu.institution}</p>
                        {edu.year && (
                          <span className="education_year">{edu.year}</span>
                        )}
                        {edu.grade && (
                          <span className="education_grade">Grade: {edu.grade}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
            <Col xs={12} lg={5}>
              <motion.div
                className="about_languages"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="about_section_title">
                  <FontAwesomeIcon icon={faLanguage} /> Languages
                </h3>
                <div className="languages_list">
                  {personalInfo.languages.map((lang, index) => (
                    <div key={index} className="language_item glass_card">
                      <span className="language_name">{lang.name}</span>
                      <span className="language_level">{lang.level}</span>
                    </div>
                  ))}
                </div>

                <div className="about_passion glass_card">
                  <p>
                    I'm looking forward to building long-term relationships with
                    my clients. Programming is my passion -- I love to learn
                    something new every day.
                  </p>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
