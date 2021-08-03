import Image from "next/image";
import Logo from "../../public/assets/eCademy.png";
import HeaderItems from "./HeaderItems";
import CandidatureButton from "../Register/CandidatureButton";
import SearchInput from "./SearchInput";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-1 py-4 px-10 items-center justify-between align-middle ">
        {" "}
        <div>
          <Image width={110} height={30} src={Logo} alt="logo image" />
        </div>
        <SearchInput />
        <HeaderItems />
        <CandidatureButton />
      </div>
    </div>
  );
}
