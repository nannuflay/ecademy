import {
  AiOutlineArrowDown,
  AiOutlineDown,
  AiOutlinePushpin,
} from "react-icons/ai";

export default function CoqntactForm() {
  return (
    <div className="w-full">
      <div className="flex flex-col font-Noto p-4">
        <div class="flex items-center mr-2">
          <AiOutlinePushpin className="z-10 w-5 h-5 mx-3 text-gray-400" />
          <select
            className=" appearance-none focus:outline-none  rounded-full w-full -ml-10 bg-white
           py-2 pl-8 text-sm text-gray-600"
          >
            <option
              selected
              disabled
              className="text-gray-200"
            >
              Object de votre demande
            </option>
            <option className="text-gray-600">
              Formations
            </option>
            <option className="text-gray-600">
              L'inscription
            </option>
          </select>
          <AiOutlineDown className="-ml-8 w-4 h-4 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Nom"
          className=" inputContact"
        />
        <input
          type="text"
          placeholder="Prenom"
          className=" inputContact"
        />
        <input
          type="text"
          placeholder="Numero Telephone"
          className=" inputContact"
        />
        <input
          type="text"
          placeholder=" E-mail"
          className=" inputContact"
        />
        <textarea
          type="text"
          placeholder=" Votre question ?"
          className=" textAreaContact"
        />
        <div className="mx-auto font-Noto mt-4">
          <button className="px-6 py-3 text-white font-medium bg-red-600 rounded-full">
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
