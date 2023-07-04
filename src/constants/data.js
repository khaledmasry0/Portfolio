import {
  faBootstrap,
  faCss3Alt,
  faGithub,
  faGulp,
  faHtml5,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FaGitAlt, FaNode } from "react-icons/fa";
import {
  SiPug,
  SiRedux,
  SiFirebase,
  SiAdobephotoshop,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiJquery,
  SiNextdotjs,
} from "react-icons/si";
import { images } from "./index";

const Skills = [
  {
    name: "HTML",
    icon: faHtml5,
  },
  {
    name: "CSS",
    icon: faCss3Alt,
  },
  {
    name: "Js",
    icon: faSquareJs,
  },
  {
    name: "Bootstrap",
    icon: faBootstrap,
  },
  {
    name: "Sass",
    icon: faSass,
  },
  {
    name: "Pug",
    iconAlt: <SiPug />,
  },
  {
    name: "jQuery",
    iconAlt: <SiJquery />,
  },
  {
    name: "Gulp",
    icon: faGulp,
  },
  {
    name: "React",
    icon: faReact,
  },
  {
    name: "React Native",
    icon: faReact,
  },
  {
    name: "Redux",
    iconAlt: <SiRedux />,
  },
  {
    name: "Next.js",
    iconAlt: <SiNextdotjs />,
  },
  {
    name: "Typescript",
    iconAlt: <SiTypescript />,
  },
  {
    name: "Node.js",
    iconAlt: <FaNode />,
  },
  {
    name: "Express",
    iconAlt: <SiExpress />,
  },
  {
    name: "Mongodb",
    iconAlt: <SiMongodb />,
  },
  {
    name: "Firebase",
    iconAlt: <SiFirebase />,
  },
  {
    name: "Git",
    iconAlt: <FaGitAlt />,
  },
  {
    name: "Github",
    icon: faGithub,
  },
  {
    name: "photoshop",
    iconAlt: <SiAdobephotoshop />,
  },
];

const projects = [
  {
    name: "Elmasry-Commerce",
    img: images.project2,
    github: "https://github.com/khaledmasry0/Elmasry-e-Shop",
    website: "https://am-commerce.web.app/",
  },
  {
    name: "GPT-3",
    img: images.project9,
    github: "https://github.com/khaledmasry0/GPT-3-Site",
    website: "https://khaledmasry0.github.io/GPT-3-Site/",
  },
  {
    name: "eShop",
    img: images.project4,
    github: "https://github.com/khaledmasry0/eShop",
    website: "https://khaledmasry0.github.io/eShop/",
  },
  {
    name: "CrEpTo",
    img: images.project13,
    github: "https://github.com/khaledmasry0/CrEpTo",
    website: "https://khaledmasry0.github.io/CrEpTo/",
  },
  {
    name: "VawulensGym",
    img: images.project3,
    github: "https://github.com/khaledmasry0/VawulensGym",
    website: "http://vawulensgym-app.surge.sh/",
  },
  {
    name: "YoutubeClone",
    img: images.project6,
    github: "https://github.com/khaledmasry0/YouTube-Clone",
    website: "https://khaledmasry0.github.io/YouTube-Clone/",
  },
  {
    name: "SocialX",
    img: images.project7,
    github: "https://github.com/khaledmasry0/SocialX",
    website: "https://khaledmasry0.github.io/SocialX/",
  },
  {
    name: "Delivery",
    img: images.project5,
    github: "https://github.com/khaledmasry0/Delivery-Website",
    website: "https://khaledmasry0.github.io/Delivery-Website/",
  },

  {
    name: "DesineyClone",
    img: images.project8,
    github: "https://github.com/khaledmasry0/DisenyClone",
    website: "https://disenyclone-62e0f.web.app/",
  },
  {
    name: "Movies Search",
    img: images.project1,
    github: "https://github.com/khaledmasry0/Movies-WebSite",
    website: "https://khaledmasry0.github.io/Movies-WebSite/",
  },
  {
    name: "Products Management",
    img: images.project12,
    github: "https://github.com/khaledmasry0/ManagementSystem",
    website: "https://khaledmasry0.github.io/ManagementSystem/",
  },
  {
    name: "Weather App",
    img: images.project11,
    github: "https://github.com/khaledmasry0/weatherApp",
    website: "https://khaledmasry0.github.io/weatherApp/",
    small: "small",
  },

  {
    name: "Password Generator",
    img: images.project10,
    github: "https://github.com/khaledmasry0/PW-generatot",
    website: "https://khaledmasry0.github.io/PW-generatot/",
    small: "small",
  },
];

export default { Skills, projects };
