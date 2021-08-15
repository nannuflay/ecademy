import Link from "next/link";
import { AiOutlineForm } from "react-icons/ai";

export default function RegisterButton() {
  return (
    <Link href='/candidacy'>
      <button className='btn btn-primary'>
        <AiOutlineForm className='w-6 h-6 mr-2' />
        Candidature
      </button>
    </Link>
  );
}
