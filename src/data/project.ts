import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAngular,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import text from "./text";

interface ProjectProps {
  title: string;
  stack: Array<IconProp>;
  websiteUrl: string;
  githubUrl: string;
  image: string;
  text: string;
}

const projectsArray: Array<ProjectProps> = [
  {
    title: "Project 1",
    stack: [faReact, faAngular],
    websiteUrl: "#",
    githubUrl: "#",
    text,
    image:
      "https://images.unsplash.com/photo-1664574654521-7faf33eb9086?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Project 2",
    stack: [faHtml5, faSass, faJs, faAngular, faNodeJs],
    websiteUrl: "#",
    githubUrl: "#",
    text,
    image:
      "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
];

export default projectsArray;
