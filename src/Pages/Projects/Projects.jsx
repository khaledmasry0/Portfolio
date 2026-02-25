import { useState, useCallback } from "react";
import { Container } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faStar } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../constants";
import { FloatingShapes } from "../../components/3d";
import "./Projects.css";

const filters = [
  { key: "all", label: "All" },
  { key: "production", label: "Production" },
  { key: "personal", label: "Personal" },
];

const TiltCard = ({ children, className }) => {
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }, []);

  return (
    <div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.4s ease" }}
    >
      {children}
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? data.projects
      : data.projects.filter((p) => p.category === activeFilter);

  return (
    <section className="projects section_padding">
      <FloatingShapes preset="sparse" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main_heading">
            My <span>Projects</span>
          </h2>
        </motion.div>

        <Container>
          <motion.div
            className="projects_filters"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter_btn ${activeFilter === filter.key ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          <motion.div layout className="projects_grid">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="project_wrapper"
                >
                  <TiltCard
                    className={`project_card glass_card ${project.featured ? "featured" : ""}`}
                  >
                    {project.featured && (
                      <div className="featured_badge">
                        <FontAwesomeIcon icon={faStar} />
                        Featured
                      </div>
                    )}
                    <div className="project_image">
                      <LazyLoadImage
                        src={project.img}
                        alt={project.name}
                        effect="blur"
                      />
                      <div className="project_overlay">
                        <div className="project_actions">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="project_action_btn"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FontAwesomeIcon icon={faGithub} />
                            </a>
                          )}
                          {project.website && (
                            <a
                              href={project.website}
                              target="_blank"
                              rel="noreferrer"
                              className="project_action_btn"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="project_info" style={{ transform: "translateZ(20px)" }}>
                      <h3 className="project_name">{project.name}</h3>
                      {project.tech && (
                        <div className="project_tech">
                          {project.tech.map((t, i) => (
                            <span key={i} className="tech_tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Projects;
