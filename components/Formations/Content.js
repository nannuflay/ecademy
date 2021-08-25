import { FiChevronDown } from "react-icons/fi";
import { BiBook } from "react-icons/bi";
import CategoryCard from "./CategoryCard";

export default function Content() {
  return (
    <div className='w-full '>
      <div className='flex flex-col text-center w-full font-Noto'>
        <h1 className='text-5xl capitalize mt-4'>
          Choisissez votre formation par catégorie
        </h1>
        <div className='flex justify-center w-4/6 mx-auto relative my-10 '>
          <div className='w-40 border-b-2 mt-[1px]' />
          <FiChevronDown className='w-7 h-7 absolute -top-2 text-gray-200' />
          <div className='w-40 border-b-2 ml-3' />
        </div>
        <CategoryCard />
      </div>
    </div>
  );
}
