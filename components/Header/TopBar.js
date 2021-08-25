import { MdLocationOn, MdSchool, MdPhone, MdEmail } from "react-icons/md";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillYoutube,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaFacebook, FaFacebookSquare } from "react-icons/fa";
const Items = [
  {
    id: 1,
    name: "(+212) 05 22 27 99 01",
    Icon: <MdPhone className='w-5 h-5 mr-3' />,
  },
  {
    id: 2,
    name: "fcat@contact.com",
    Icon: <MdEmail className='w-5 h-5 mr-3' />,
  },
];
export default function TopBar() {
  return (
    <div className='flex min-w-full  bg-primary-focus  justify-end px-44 py-1 select-none'>
      {/* commentaite */}
      <div className='flex items-center'>
        {Items.map((item) => {
          return (
            <div
              className={
                " text-gray-600 flex items-center font-Noto mx-3  text-sm cursor-pointer "
              }>
              {item.Icon}
              <Link href={`${item.to}`}>
                <span>{item.name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
