import { AiFillThunderbolt, AiOutlineUnorderedList } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { IoMdGitNetwork } from "react-icons/io";
import { FaTelegramPlane, FaUserGraduate } from "react-icons/fa";

export const Features = [
  {
    name: "Leçons efficaces",
    icon: <AiFillThunderbolt className='w-7 h-7 text-primary' />,
  },
  {
    name: "Professional Degree",
    icon: <FaUserGraduate className='w-7 h-7 text-primary' />,
  },

  {
    name: "Awesome Quizzes",
    icon: <AiOutlineUnorderedList className='w-7 h-7 text-primary' />,
  },
  {
    name: "Advanced Exercices",
    icon: <FaTelegramPlane className='w-7 h-7 text-primary' />,
  },
];
