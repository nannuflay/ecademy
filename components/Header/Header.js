import HeaderItems from "./HeaderItems";
import CandidacyButton from "../candidacy/CandidacyButton";
import SearchInput from "./SearchInput";
import TopBar from "./TopBar";
import Image from "next/image";
import Logo from "../../public/assets/logo.jpg";

export default function Header() {
  return (
    <div>
      {/* <TopBar /> */}
      <div className='flex py-6 px-10 items-center justify-between align-middle '>
        {" "}
        <div className='flex-1'>
          <Image src={Logo} height={60} width={150} />
        </div>
        <HeaderItems />
        <div className='w-10' />
        <CandidacyButton />
      </div>
    </div>
  );
}
