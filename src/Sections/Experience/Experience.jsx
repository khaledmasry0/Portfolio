import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../constants";
import { FloatingShapes } from "../../components/3d";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience section_padding">
      <FloatingShapes preset="code" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main_heading">
            Work <span>Experience</span>
          </h2>
        </motion.div>

        <Container>
          <VerticalTimeline lineColor="var(--borderColor)">
            {data.experiences.map((exp, index) => (
              <VerticalTimelineElement
                key={index}
                className="experience_item"
                contentStyle={{
                  background: "var(--bgCard)",
                  border: "var(--glassBorder)",
                  borderRadius: "16px",
                  boxShadow: "var(--shadow)",
                  backdropFilter: "var(--glassBlur)",
                  WebkitBackdropFilter: "var(--glassBlur)",
                  color: "var(--textColor)",
                  padding: "28px 32px",
                }}
                contentArrowStyle={{
                  borderRight: "8px solid var(--bgCard)",
                }}
                date={exp.date}
                dateClassName="experience_date"
                iconStyle={{
                  background: "linear-gradient(135deg, #c8a25a, #534666)",
                  boxShadow:
                    "0 0 0 4px var(--bgColor), 0 0 20px rgba(200, 162, 90, 0.3)",
                }}
                icon={<FontAwesomeIcon icon={faBriefcase} />}
              >
                <div className="experience_header">
                  <h3 className="experience_title">{exp.title}</h3>
                  <h4 className="experience_company">{exp.company}</h4>
                  <div className="experience_meta">
                    <span className="experience_type">{exp.type}</span>
                    <span className="experience_location">{exp.location}</span>
                  </div>
                </div>
                <ul className="experience_points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="experience_link"
                  >
                    Visit Project →
                  </a>
                )}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </Container>
      </div>
    </section>
  );
};

export default Experience;
