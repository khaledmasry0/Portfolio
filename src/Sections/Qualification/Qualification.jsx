import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FloatingShapes } from "../../components/3d";
import "./Qualification.css";

const Qualification = () => {
  const route = useNavigate();
  return (
    <section className="qualification section_padding">
      <FloatingShapes preset="sparse" />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main_heading">
            <span>Qualification</span>
          </h2>
        </motion.div>
        <Container>
          <motion.article
            className="qual_cont glass_card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              A Senior Frontend Developer with over <span>5</span> years of
              experience building fast, scalable, and user-centered web
              applications. Skilled in React.js, React Native, TypeScript, and
              performance optimization, with a solid understanding of frontend
              architecture and micro frontend principles.
            </p>
            <p>
              Having worked across industries like AI platforms, e-commerce, and
              defense technology, I bring both technical depth and practical
              problem-solving to every project.
            </p>
            <button className="custom_button" onClick={() => route("/About")}>
              Learn More About Me
            </button>
          </motion.article>
        </Container>
      </div>
    </section>
  );
};

export default Qualification;
