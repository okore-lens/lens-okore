import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faMobileAndroid,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

interface WorkItemProps {
  title: string;
  description: string;
  icon: IconProp;
}

const WorkArray: Array<WorkItemProps> = [
  {
    title: "Server Development",
    description: "Some text that I would probably never know about",
    icon: faServer,
  },
  {
    title: "Web Development",
    description: "Some text that I would probably never know about",
    icon: faCode,
  },
  {
    title: "Mobile Development",
    description: "Some text that I would probably never know about",
    icon: faMobileAndroid,
  },
];

export default WorkArray;
