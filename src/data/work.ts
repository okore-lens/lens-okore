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
    title: "Web Development",
    description:
      "Highly responsive and scalable web appliations that use new technologies",
    icon: faCode,
  },
  {
    title: "Mobile Development",
    description:
      "Developing both iOS and Android applications that are of high standards",
    icon: faMobileAndroid,
  },
  {
    title: "Server Development",
    description:
      "Secure and robust servers that can serve both small and large scale organisations",
    icon: faServer,
  },
];

export default WorkArray;
