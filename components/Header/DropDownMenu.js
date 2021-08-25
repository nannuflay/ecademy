import {
  FaChevronDown,
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
} from "react-icons/fa";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";

const Categories = () => {
  return (
    <div class='dropdown dropdown-hover relative'>
      <div
        tabindex='0'
        class=' text-gray-800 flex items-center transition-colors ease-in duration-300
               tracking-wide  mx-3  hover:text-primary   cursor-pointer font-Noto'>
        Nos formations
        <FaChevronDown className='h-3 w-3 ml-2 mt-1 ' />
      </div>
      <div
        tabindex='0'
        class='p-6 shadow dropdown-content bg-base-100 rounded-box w-[700px] -ml-80'>
        <div className='  flex  justify-between flex-wrap'>
          <div className='flex flex-col'>
            <div className='flex items-center font-Noto font-semibold text-xs capitalize text-gray-700'>
              <FaLaptopCode className='w-5 h-5 mr-2 text-primary' />
              <h1>web developement</h1>
            </div>
            <div className='flex flex-col text-xs px-2 text-gray-500 mt-4'>
              <Link href='/dev'>
                <a className=' hover:text-secondary-focus'>
                  Html, Css, Javascript Bootcamp
                </a>
              </Link>
              <Link href='/'>
                <a className=' hover:text-secondary-focus  my-2'>
                  Python Flask & React.JS Full Stack
                </a>
              </Link>
              <Link href='/ss'>
                <a className=' hover:text-secondary-focus'>
                  React.JS & Node.JS Full Stack
                </a>
              </Link>
              <Link href='/ssss'>
                <a className='my-2  hover:text-secondary-focus'>
                  MERN (MongoDb, Express, React, Node) <br />
                  Full Stack E-commerce
                </a>
              </Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center font-Noto font-semibold text-xs capitalize text-gray-700'>
              <FaRobot className='w-5 h-5 mr-2 text-primary' />
              <h1>Machine learning</h1>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex items-center font-Noto font-semibold text-xs capitalize text-gray-700'>
              <FaMobileAlt className='w-5 h-5 mr-2 text-primary' />
              <h1>mobile developement</h1>
            </div>
          </div>
        </div>
        <div className='mx-auto  text-sm font-bold font-Noto'>
          <button className=' capitalize text-primary-focus flex justify-center mx-auto font-bold'>
            Plus
          </button>
          <BsChevronDoubleDown className='flex mx-auto text-primary w-5 h-5' />
        </div>
      </div>
    </div>
  );
};

export default Categories;
