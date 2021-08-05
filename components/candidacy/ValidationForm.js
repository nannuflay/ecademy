import { AiOutlineCheck } from "react-icons/ai";
export default function ValidationForm() {
  return (
    <div class="flex items-center justify-center my-10 px-10 leading-5 w-5/6 mt-8 font-Noto text-gray-600">
      <button
        className="uppercase flex items-center  px-5 py-3 bg-red-500
            text-white rounded-md text-sm font-semibold
            hover:bg-black transition-colors duration-300 ease-out shadow-xl"
      >
        Valider
        <AiOutlineCheck className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
}
