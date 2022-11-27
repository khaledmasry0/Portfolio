import {
  faFacebookF,
  faFacebookMessenger,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => (
  <section className="footer">
    <ul className="social">
      <li>
        <a
          href="https://github.com/khaledmasry0"
          className="Github"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/khaledmohamed01"
          className="Facebook"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/khaled-elmasry-4b4689255/"
          className="Linkedin"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/khaled009001/"
          className="Instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a
          href="mailto:khaledmohamed3360@gmail.com"
          className="Gmail"
          target="_blank"
          rel="noreferrer"
          aria-label="Gmail"
        >
          <FontAwesomeIcon icon={faM} />
        </a>
      </li>
      <li>
        <a
          href="https://m.me/khaledmohamed01/"
          className="Messenger"
          target="_blank"
          rel="noreferrer"
          aria-label="Messenger"
        >
          <FontAwesomeIcon icon={faFacebookMessenger} />
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/+201011131316"
          className="WhatsApp"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </li>
    </ul>
    <p className="made">
      Powered By <span>Khaled Mohamed</span>
    </p>
  </section>
);

export default Footer;
