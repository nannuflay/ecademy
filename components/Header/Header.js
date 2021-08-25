import HeaderItems from "./HeaderItems";
import CandidacyButton from "../candidacy/CandidacyButton";
import SearchInput from "./SearchInput";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <div>
      {/* <TopBar /> */}
      <div className='flex bg-base-200  py-10 px-10 items-center justify-between align-middle '>
        {" "}
        <div className=' font-bold font-Noto text-2xl flex-1'>Logo ici</div>
        <HeaderItems />
        <div className='w-10' />
        <CandidacyButton />
      </div>
    </div>
  );
}
