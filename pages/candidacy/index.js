import Header from "../../components/Header/Header";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineLock,
  AiOutlineEye,
  AiOutlineCheck,
} from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import CandidacyContent from "../../components/candidacy/CandidacyContent";
import CandidacyForm from "../../components/candidacy/CandidacyForm";

export default function Candidacy() {
  return (
    <div>
      <Header />{" "}
      <div className="  bg-gray-100 h-44 pl-28 flex items-center">
        <div className="flex flex-col font-Noto ">
          <h1 className="text-4xl font-bold text-gray-800">Candidature</h1>
          <div className=" border-t-2 w-16 border-green-500 rounded-md mt-4 " />
        </div>
      </div>
      <div className="flex w-full">
        <CandidacyContent class="bg-green-500" />
        <CandidacyForm />
      </div>
    </div>
  );
}
