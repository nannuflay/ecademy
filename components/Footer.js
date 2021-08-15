import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className='w-full bg-gray-700 h-[400px] mt-44'>
      <div className='w-5/6 mx-auto'>
        <div className='text-start   w-5/6 mx-auto'>
          <h1 className='text-xl font-extrabold font-Noto'>
            {" "}
            Retrouvez-nous sur les réseaux sociaux
          </h1>
          <div className='flex w-5/6 justify-between text-green-500 mt-4  '>
            <AiFillFacebook className=' w-8 h-8 hover:text-blue-500 cursor-pointer' />
            <AiOutlineInstagram className=' w-8 h-8 hover:text-pink-400 cursor-pointer' />

            <AiFillLinkedin className=' w-8 h-8 hover:text-blue-400 cursor-pointer' />
            <AiOutlineTwitter className=' w-8 h-8 hover:text-blue-300 cursor-pointer' />
            <AiOutlineYoutube className=' w-8 h-8 hover:text-red-700 cursor-pointer' />
          </div>
        </div>
      </div>
    </div>
  );
}
