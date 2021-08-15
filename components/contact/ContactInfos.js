import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function ContactInfos() {
  return (
    <div className='bg-gray-50 flex flex-col mr-4 rounded-lg p-4 border border-gray-300 shadow-sm'>
      <div className='flex items-center font-Noto text-sm font-medium'>
        <AiOutlineWhatsApp className='text-secondary-focus w-6 h-6 mr-5' />
        <span className='text-gray-700'>(+212) 6 42 44 25 36</span>
      </div>
      <div className='flex items-center font-Noto text-sm font-medium mt-6'>
        <AiOutlineHome className='text-secondary-focus w-6 h-6 mr-5' />
        <div className='flex flex-col'>
          <span className=' text-gray-700'>FCAT</span>
          <p className='text-xs font-normal text-gray-500 mt-1'>
            Amerchich, lot kotoubia, Rue picasso N°30, Marrakesh
          </p>
        </div>
      </div>

      <div className='flex items-center font-Noto text-sm font-medium mt-6 text-gray-700'>
        <AiOutlinePhone className='text-secondary-focus w-6 h-6 mr-5' />
        <div className='flex flex-col'>
          <span>(+212) 05 22 27 99 01</span>
          <p className='text-xs  text-gray-500 font-normal mt-1'>
            Du lundi au vendredi de 9h00 à 18h00
          </p>
        </div>
      </div>
      <div className='flex items-center font-Noto text-sm font-medium mt-6 text-gray-700'>
        <AiOutlineMail className='text-secondary-focus w-6 h-6 mr-5' />
        <div className='flex flex-col'>
          <span>FCAT@gmail.com</span>
          <p className='text-xs font-normal text-gray-500 mt-1'>
            disponible 24h/24
          </p>
        </div>
      </div>
    </div>
  );
}
