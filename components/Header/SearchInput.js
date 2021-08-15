import { MdSearch } from "react-icons/md";

export default function SearchInput() {
  return (
    <div class='w-1/4 relative mr-4'>
      <input
        className='bg-gray-100 appearance-none border-2 placeholder-gray-500
           border-gray-100 rounded w-full py-3 pl-4 pr-10 text-gray-700 leading-tight
            focus:outline-none  focus:placeholder-transparent text-sm transition ease-linear duration-600'
        placeholder='Que recherchez-vous ?'
      />
      <MdSearch className='absolute top-3 right-2 text-primary h-6 w-6' />
    </div>
  );
}
