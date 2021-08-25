import { Categories } from "./FormationsType";
import Image from "next/image";
import { BiBook } from "react-icons/bi";
import Link from "next/link";

const CategoryCard = () => {
  return (
    <div>
      <div className='w-5/6 flex flex-wrap justify-center mx-auto'>
        {Categories.map((category) => {
          return (
            <Link href={`${category.to}`}>
              <div
                key={category.id}
                className='w-80 mt-10   mx-3 rounded-lg hover:shadow-xl hover:scale-110 transform transition duration-500 relative select-none cursor-pointer'>
                <div class='bg-black rounded-xl opacity-60 w-full h-full absolute z-10' />

                <Image
                  src={category.banner}
                  height={400}
                  className='card-zoom-image'
                />
                <div className='absolute top-20 text-white  z-20 font-Noto text-2xl left-12 flex flex-col text-center'>
                  {category.name}
                  <span className='text-sm flex items-center mx-auto mt-2'>
                    <BiBook className='w-5 h-5 mr-2' />
                    {category.lessons_Num} Formations
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCard;
