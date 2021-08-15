import { AiOutlinePushpin } from "react-icons/ai";
import { FaRegPaperPlane, FaTelegramPlane } from "react-icons/fa";

export default function CoqntactForm() {
  return (
    <div className='w-full'>
      <div className='flex flex-col font-Noto'>
        <div class='flexBox relative'>
          <AiOutlinePushpin className='z-20 w-5 h-5  text-gray-800 absolute top-[13px] left-1' />
          <select className='select w-full pl-7'>
            <option selected disabled>
              Object de votre formation
            </option>
            <option>Object 1</option>
            <option>Object 2</option>
          </select>
        </div>
        <input type='text' placeholder='Nom' className=' inputContact' />
        <input type='text' placeholder='Prenom' className=' inputContact' />
        <input
          type='text'
          placeholder='Numero Telephone'
          className=' inputContact'
        />
        <input type='text' placeholder=' E-mail' className=' inputContact' />
        <textarea
          type='text'
          placeholder=' Votre question ?'
          className=' textAreaContact'
        />
        <div className='mx-auto font-Noto mt-4'>
          <button className='btn btn-primary'>
            Envoyer
            <FaTelegramPlane className='ml-1 mt-1 w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  );
}
