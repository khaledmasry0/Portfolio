import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCheck,
  faExclamationTriangle,
  faPaperPlane,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import { data } from "../../constants";
import { NetworkScene } from "../../components/3d";
import "./Contact.css";

const { personalInfo } = data;

const contactCards = [
  {
    icon: faPhone,
    title: "Call Me",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: faEnvelope,
    title: "Email Me",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: faLinkedinIn,
    title: "LinkedIn",
    value: "Connect with me",
    href: personalInfo.linkedin,
  },
  {
    icon: faMapMarkerAlt,
    title: "Location",
    value: personalInfo.location,
    href: null,
  },
];

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    setSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setSending(false);
          setTimeout(() => setStatus(null), 5000);
        },
        () => {
          window.open(
            `mailto:${personalInfo.email}?subject=${encodeURIComponent(
              formData.subject
            )}&body=${encodeURIComponent(
              `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
            )}`
          );
          setSending(false);
          setStatus("success");
          setTimeout(() => setStatus(null), 5000);
        }
      );
  };

  return (
    <section className="contact section_padding">
      <NetworkScene />

      <div style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="main_heading">
            Get In <span>Touch</span>
          </h2>
        </motion.div>

        <Container>
          <motion.div
            className="contact_cards"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                className="contact_card glass_card"
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contact_card_icon">
                  <FontAwesomeIcon icon={card.icon} />
                </div>
                <h3>{card.title}</h3>
                {card.href ? (
                  <a href={card.href} target="_blank" rel="noreferrer">
                    {card.value}
                  </a>
                ) : (
                  <p>{card.value}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <Row className="contact_form_row">
            <Col xs={12} lg={6}>
              <motion.div
                className="contact_form_text"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>
                  Let's Work <span className="gradient_text">Together</span>
                </h3>
                <p>
                  Have a project in mind or want to discuss a collaboration? Feel
                  free to reach out. I'm always open to new opportunities and
                  challenges.
                </p>
                <div className="contact_highlights">
                  <div className="highlight_item">
                    <span className="highlight_number">5+</span>
                    <span className="highlight_label">Years Experience</span>
                  </div>
                  <div className="highlight_item">
                    <span className="highlight_number">15+</span>
                    <span className="highlight_label">Projects Done</span>
                  </div>
                  <div className="highlight_item">
                    <span className="highlight_number">5</span>
                    <span className="highlight_label">Companies</span>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col xs={12} lg={6}>
              <motion.div
                className="contact_form glass_card"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
                  <div className="form_group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="form_group">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInput}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="custom_button contact_submit"
                    disabled={sending}
                  >
                    {sending ? (
                      "Sending..."
                    ) : (
                      <>
                        <FontAwesomeIcon icon={faPaperPlane} /> Send Message
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <motion.div
                      className="form_status success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FontAwesomeIcon icon={faCheck} /> Message sent
                      successfully!
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      className="form_status error"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FontAwesomeIcon icon={faExclamationTriangle} /> Please
                      fill in all required fields.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
