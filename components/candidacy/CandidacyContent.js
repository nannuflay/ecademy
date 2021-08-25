import Image from "next/image";
import student from "../../public/assets/ss.png";
export default function CandidacyContent() {
  return (
    <div className='w-full flex justify-center mx-auto'>
      <div className=' md:pl-28 mx-auto  pt-10 font-Noto text-gray-800'>
        <p>
          Pour déposer votre candidature, il vous suffit de remplir le
          formulaire ci-contre.
        </p>

        <div className='flex justify-center items-center mt-4'>
          <Image src={student} />
        </div>
        <p className='mt-6'>
          Une fois votre dossier de candidature validé, un référent vous
          contactera pour le passage des tests et de l’entretien d’admission.
        </p>
      </div>
    </div>
  );
}
