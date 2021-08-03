import { MdAssignmentInd } from "react-icons/md";
export default function RegisterButton() {
  return (
    <div>
      <button
        className="bg-green-500 hover:bg-gray-900 text-white py-3 px-8 rounded flex 
              items-center transition-colors ease-linear duration-300 font-Noto"
      >
        <MdAssignmentInd className="w-6 h-6 mr-2" />
        Candidature
      </button>
    </div>
  );
}
