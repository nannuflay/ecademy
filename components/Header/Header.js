import Image from "next/image";
import Logo from "../../public/assets/logo.jpg";
import HeaderItems from "./HeaderItems";
import CandidacyButton from "../candidacy/CandidacyButton";
import SearchInput from "./SearchInput";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <div>
      <TopBar />
      <div className='flex flex-1 py-4 px-10 items-center justify-between align-middle '>
        {" "}
        <div className=' font-bold font-Noto text-2xl'>Logo ici</div>
        <SearchInput />
        <HeaderItems />
        <CandidacyButton />
      </div>
    </div>
  );
}
