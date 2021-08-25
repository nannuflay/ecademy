import Link from "next/link";
import {
  FaAtom,
  FaChevronDown,
  FaDatabase,
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";

export default function CategoriesMenu() {
  const Categories = [
    {
      id: 0,
      to: "/",
      name: "Web Developement",
      icon: <FaLaptopCode className='w-5 h-5 mr-2 text-gray-600' />,
    },
    {
      id: 1,
      to: "/de",
      name: "Mobile Developement",
      icon: <FaMobileAlt className='w-5 h-5 mr-2 text-gray-600' />,
    },
    {
      id: 2,
      to: "/asdasd",
      name: "Machine Learning",
      icon: <FaRobot className='w-5 h-5 mr-2 text-gray-600' />,
    },
    {
      id: 2,
      to: "/asdasd",
      name: "Data Science",
      icon: <FaDatabase className='w-5 h-5 mr-2 text-gray-600' />,
    },
    {
      id: 2,
      to: "/asdasd",
      name: "Computer Science",
      icon: <FaAtom className='w-5 h-5 mr-2 text-gray-600' />,
    },
  ];
  return (
    <div>
      <div class='dropdown dropdown-hover relative'>
        <div
          tabIndex='0'
          class=' text-gray-800 flex items-center transition-colors ease-in duration-300
          tracking-wide  mx-3  hover:text-primary cursor-pointer font-Noto  uppercase text-sm font-semibold'>
          <Link href='/Formations'>
            <div className='flex items-center'>
              Nos formations
              <FaChevronDown className='h-3 w-3 ml-2 mt-1 ' />
            </div>
          </Link>
        </div>

        <ul
          tabindex='0'
          class='p-2 shadow menu dropdown-content bg-base-100 rounded-box w-64 -ml-10'>
          {Categories.map((category) => {
            return (
              <li key={category.id} className=''>
                <a className=''>
                  {category.icon}
                  <span className=' ml-4 font-Noto text-sm font-medium text-gray-600   tracking-wide'>
                    {category.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
