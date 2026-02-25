import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { data } from "../../constants";
import { SkillsSphere, ParticleField } from "../../components/3d";
import "./Skills.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = () => {
  return (
    <section className="skills section_padding">
      <ParticleField intensity="light" showRings={false} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main_heading">
            Skills & <span>Technologies</span>
          </h2>
        </motion.div>

        <Container>
          {/* 3D Interactive Globe */}
          <motion.div
            className="skills_globe_wrapper"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SkillsSphere />
            <p className="skills_globe_hint">Drag to rotate the skills globe</p>
          </motion.div>

          {/* Categorized Cards */}
          <motion.div
            className="skills_grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {data.skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="skills_category glass_card"
                variants={itemVariants}
              >
                <h3 className="skills_category_title">{category.title}</h3>
                <div className="skills_list">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      className="skill_item"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="skill_icon">
                        <FontAwesomeIcon icon={skill.icon} />
                      </div>
                      <span className="skill_name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </div>
    </section>
  );
};

export default Skills;
