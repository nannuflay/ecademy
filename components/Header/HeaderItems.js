import Link from "next/link";
import CategoriesMenu from "./CategoriesMenu";

const HeaderItems = () => {
  return (
    <div className='flex items-center'>
      <div
        className='text-gray-800 flex items-center transition-colors ease-in duration-300
               tracking-wide  mx-3  hover:text-primary   cursor-pointer font-Noto uppercase text-sm font-semibold'>
        <Link href='/'>Acceuil</Link>
      </div>
      {/* <DropDownMenu /> */}
      {/* <CategoriesMenu /> */}
      <div
        className='text-gray-800 flex items-center transition-colors ease-in duration-300
               tracking-wide  mx-3  hover:text-primary   cursor-pointer font-Noto  uppercase text-sm font-semibold'>
        <Link href='/Formations'>Nos Formations</Link>
      </div>
      <div
        className='text-gray-800 flex items-center transition-colors ease-in duration-300
               tracking-wide  mx-3  hover:text-primary   cursor-pointer font-Noto  uppercase text-sm font-semibold'>
        <Link href='/Certificats'>Certifications</Link>
      </div>
      <div
        className='text-gray-800 flex items-center transition-colors ease-in duration-300
               tracking-wide  mx-3  hover:text-primary   cursor-pointer font-Noto  uppercase text-sm font-semibold'>
        <Link href='/About'>Qui sommes-nous</Link>
      </div>
      <div
        className='text-gray-800 flex items-center transition-colors ease-in duration-300
               tracking-wide  mx-3  hover:text-primary   cursor-pointer font-Noto  uppercase text-sm font-semibold'>
        <Link href='/Contact'>Contact</Link>
      </div>
    </div>
  );
};

export default HeaderItems;
