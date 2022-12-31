import text from "./text";

interface BlogProps {
  title: string;
  text: string;
  image: string;
}

const blogArray: Array<BlogProps> = [
  {
    title: "Javascript Fundamentals",
    text,
    image:
      "https://images.unsplash.com/photo-1661961111184-11317b40adb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  },
  {
    title: "UI/UX Architecture",
    text,
    image:
      "https://images.unsplash.com/photo-1604074131228-9d48b811bd80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

export default blogArray;
