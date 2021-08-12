import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
} from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import ValidationForm from "./ValidationForm";

export default function CandidacyForm() {
  return (
    <div className="flex pt-7 mx-10 justify-center  w-5/6">
      <div className="w-full mx-auto">
        <div class="flexBox">
          <AiOutlineTeam className="z-10 w-5 h-5 mx-3 text-gray-800" />
          <select className="select">
            <option selected disabled>
              CIVILITÉ
            </option>
            <option>M</option>
            <option>Mme</option>
          </select>
        </div>

        <div class="flexBox">
          <AiOutlineUser className="z-10 w-5 h-5 mx-3 text-gray-800" />
          <input
            type="text"
            placeholder="PRÉNOM"
            class="input"
          />
        </div>
        <div class="flexBox">
          <AiOutlineUser className="z-10 w-5 h-5 mx-3 text-gray-800" />
          <input
            type="text"
            placeholder="NOM"
            class="input"
          />
        </div>
        <div class="flexBox">
          <AiOutlineMail className="z-10 w-5 h-4 mx-3 text-gray-800" />
          <input
            type="text"
            placeholder="E-MAIL"
            class="input"
          />
        </div>
        <div class="flex items-center pl-3 mt-4 font-Noto text-gray-700 text-xs mx-10">
          <input
            type="checkbox"
            id="checkbox-email"
            class="checkbox"
          />
          <label for="checkbox-email">
            J'accepte de recevoir les informations sur les
            formation de Fcat par e-mail
          </label>
        </div>
        <div class="flexBox">
          <AiOutlinePhone className="z-10 w-5 h-5 mx-3 text-gray-800" />
          <input
            type="text"
            placeholder="TÉLÉPHONE"
            class="input"
          />
        </div>
        <div class="flexBox pl-3 text-gray-700">
          <input
            type="checkbox"
            id="checkbox-sms"
            class="checkbox"
          />
          <label for="checkbox-sms">
            J'accepte de recevoir les informations sur les
            formation de Fcat par SMS
          </label>
        </div>
        <div class="flexBox">
          <AiOutlineLock className="z-10 w-5 h-5 mx-3 text-gray-800" />
          <input
            type="password"
            placeholder="MOT DE PASSE"
            class="input"
          />
          <AiOutlineEye className="z-10 w-4 h-4 mx-3 text-gray-800 -ml-6" />
        </div>
        <div class="flex items-center leading-5 pl-10 w-5/6 mt-4 font-Noto text-gray-600 text-xs">
          <label>
            8 caractères minimum et au moins 3 des 4 types :
            majuscules, minuscules, chiffres, autres.
          </label>
        </div>
        <div class="flexBox">
          <IoSchoolOutline className="z-10 w-5 h-5 mx-3 text-gray-800" />
          <select className="select">
            <option selected disabled>
              SÉLECTIONNEZ VOTRE FORMATION
            </option>
            <option>
              Full Stack (React, Nodejs) Developer
            </option>
            <option>
              Full Stack (Vuejs, Laravel) Developer
            </option>
            <option>
              Full Stack (Flask, React) Developer
            </option>
            <option>Python Machine Learning</option>
            <option>
              Flutter for Mobile developement (ios, android)
            </option>
            <option className="capitalize">
              React Native for mobile developement
            </option>
            <option>
              MERN (MongoDb, Express, React, Nodejs) Full
              Stack
            </option>
          </select>
        </div>
        <div
          class="flex items-center justify-center  px-11 leading-5
                  w-5/6 mt-8 font-Noto text-gray-600 text-[10px]"
        >
          <label>
            Les informations recueillies dans ce formulaire
            font l'objet d'un traitement informatique ayant
            pour finalité la gestion de votre candidature
            (et, si vous l'avez accepté, l'envoi d'e-mails
            et/ou de SMS d'information) par la société{" "}
            <a className="hover:underline text-red-500 cursor-pointer">
              FCAT
            </a>{" "}
            . Pour plus d'informations apres la validation
            de votre candidature,
          </label>
        </div>
        <ValidationForm />
      </div>
    </div>
  );
}
