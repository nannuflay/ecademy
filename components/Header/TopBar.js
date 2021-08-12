import {
  MdLocationOn,
  MdSchool,
  MdPhone,
} from "react-icons/md";
import Link from "next/link";
const Items = [
  {
    id: 0,
    name: "Ecole",
    to: "/About",
    Icon: <MdSchool className="w-5 h-5 mr-3" />,
  },
  {
    id: 1,
    name: "Contact",
    to: "/Contact",
    Icon: <MdLocationOn className="w-5 h-5 mr-3" />,
  },
  {
    id: 2,
    name: "(+212) 05 22 27 99 01",
    Icon: <MdPhone className="w-5 h-5 mr-3" />,
  },
];
export default function TopBar() {
  return (
    <div className="flex min-w-full bg-green-700  justify-end px-44 py-1 select-none">
      {/* commentaite */}
      {Items.map((item) => {
        return (
          <div
            className={
              item.id != 2
                ? " hover:underline text-white flex items-center font-Noto mx-3  text-sm cursor-pointer "
                : "text-white flex items-center font-Noto mx-3  text-sm cursor-pointer"
            }
          >
            {item.Icon}
            <Link href={`${item.to}`}>
              <span>{item.name}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
