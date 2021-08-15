import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { VscPerson } from "react-icons/vsc";
import { IoSchoolOutline } from "react-icons/io5";
import ValidationForm from "./ValidationForm";

export default function CandidacyForm() {
  return (
    <div className='flex pt-7 mx-10 justify-center  w-5/6'>
      <div className='w-full mx-auto'>
        {/* <div class='flex items-center mr-10 relative px-4'>
          <AiOutlineTeam className='z-10 w-5 h-5  text-gray-800 absolute top-3 left-7' />
          <select className='select  px-10 w-40'>
            <option selected disabled>
              CIVILITÉ
            </option>
            <option>M</option>
            <option>Mme</option>
          </select>
        </div> */}
        <div class='flexBox'>
          <VscPerson className='z-10 w-5 h-5 mx-3 text-gray-800' />
          <select className='select'>
            <option selected disabled>
              CIVILITÉ
            </option>
            <option>M</option>
            <option>Mme</option>
          </select>
        </div>

        <div class='flexBox'>
          <AiOutlineUser className='z-10 w-5 h-5 mx-3 text-gray-800' />
          <input type='text' placeholder='PRÉNOM' class='inputCandidacy' />
        </div>
        <div class='flexBox'>
          <AiOutlineUser className='z-10 w-5 h-5 mx-3 text-gray-800' />
          <input type='text' placeholder='NOM' class='inputCandidacy' />
        </div>
        <div class='flexBox'>
          <AiOutlineMail className='z-10 w-5 h-4 mx-3 text-gray-800' />
          <input type='text' placeholder='E-MAIL' class='inputCandidacy' />
        </div>

        <div class='flexBox'>
          <AiOutlinePhone className='z-10 w-5 h-5 mx-3 text-gray-800' />
          <input type='text' placeholder='TÉLÉPHONE' class='inputCandidacy' />
        </div>

        <div class='flexBox'>
          <IoSchoolOutline className='z-10 w-5 h-5 mx-3 text-gray-800' />
          <select className='select'>
            <option selected disabled>
              SÉLECTIONNEZ VOTRE FORMATION
            </option>
            <option>Full Stack (React, Nodejs) Developer</option>
            <option>Full Stack (Vuejs, Laravel) Developer</option>
            <option>Full Stack (Flask, React) Developer</option>
            <option>Python Machine Learning</option>
            <option>Flutter for Mobile developement (ios, android)</option>
            <option className='capitalize'>
              React Native for mobile developement
            </option>
            <option>MERN (MongoDb, Express, React, Nodejs) Full Stack</option>
          </select>
        </div>
        <div class='form-control ml-6 mt-2'>
          <label class='cursor-pointer label'>
            <input
              type='checkbox'
              class='checkbox checkbox-primary checkbox-sm checkbox-secondary'
            />

            <span class='label-text flex-1 ml-3 font-Noto text-gray-600'>
              J'accepte de recevoir les informations sur les formation de Fcat
              par E-mail et SMS
            </span>
          </label>
        </div>
        <div
          class='flex items-center justify-center mx-auto leading-6
                  w-5/6 mt-3 font-Noto text-gray-600 text-[11px]'>
          <label>
            Les informations recueillies dans ce formulaire font l'objet d'un
            traitement informatique ayant pour finalité la gestion de votre
            candidature (et, si vous l'avez accepté, l'envoi d'e-mails et/ou de
            SMS d'information) par la société{" "}
            <a className='hover:underline text-primary cursor-pointer'>FCAT.</a>{" "}
          </label>
        </div>
        <ValidationForm />
      </div>
    </div>
  );
}
