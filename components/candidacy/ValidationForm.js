import { AiOutlineCheck } from "react-icons/ai";
export default function ValidationForm() {
  return (
    <div class=' flex justify-center w-5/6 my-3'>
      <button className='btn btn-primary'>
        Valider
        <AiOutlineCheck className='ml-2 w-5 h-5' />
      </button>
    </div>
  );
}
