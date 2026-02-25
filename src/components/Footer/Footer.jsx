import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const socialLinks = [
  {
    href: "https://github.com/khaledmasry0",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/khaled-elmasry-4b4689255/",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/+201011131316",
    icon: faWhatsapp,
    label: "WhatsApp",
  },
  {
    href: "mailto:khaledmohamed3360@gmail.com",
    icon: faEnvelope,
    label: "Email",
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer_content">
      <div className="footer_social">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
            className="footer_social_link"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
      <div className="footer_divider" />
      <p className="footer_credit">
        Designed & Built by <span className="gradient_text">Khaled Mohamed</span>
      </p>
      <p className="footer_year">&copy; {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
