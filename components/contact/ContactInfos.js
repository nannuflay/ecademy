import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function ContactInfos() {
  return (
    <div className="bg-gray-50 flex flex-col mr-4 rounded-lg p-6">
      <div className="flex items-center font-Noto text-sm font-medium">
        <AiOutlineWhatsApp className="text-green-500 w-6 h-6 mr-5" />
        <span>(+212) 6 42 44 25 36</span>
      </div>
      <div className="flex items-center font-Noto text-sm font-medium mt-6">
        <AiOutlineHome className="text-green-500 w-6 h-6 mr-5" />
        <div className="flex flex-col">
          <span>FCAT</span>
          <p className="text-xs font-light">
            Amerchich, lot kotoubia, Rue picasso N°30,
            Marrakesh
          </p>
        </div>
      </div>

      <div className="flex items-center font-Noto text-sm font-medium mt-6">
        <AiOutlinePhone className="text-green-500 w-6 h-6 mr-5" />
        <div className="flex flex-col">
          <span>(+212) 05 22 27 99 01</span>
          <p className="text-xs font-light">
            Du lundi au vendredi de 9h00 à 18h00
          </p>
        </div>
      </div>
      <div className="flex items-center font-Noto text-sm font-medium mt-6">
        <AiOutlineMail className="text-green-500 w-6 h-6 mr-5" />
        <div className="flex flex-col">
          <span>FCAT@gmail.com</span>
          <p className="text-xs font-light">
            disponible 24h/24
          </p>
        </div>
      </div>
    </div>
  );
}
