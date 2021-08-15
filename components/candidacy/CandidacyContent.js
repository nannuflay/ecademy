import Image from "next/image";
import student from "../../public/assets/ss.png";
export default function CandidacyContent() {
  return (
    <div className='flex justify-between  w-full'>
      <div className=' pl-28 pt-10 font-Noto text-gray-800'>
        <p>
          Pour déposer votre candidature, il vous suffit de remplir le
          formulaire ci-contre.
        </p>
        <p className='mt-6'>
          Vous pourrez ensuite, à l’aide de votre adresse e-mail et de votre mot
          de passe, accéder à votre espace sécurisé afin de compléter en toute
          tranquillité votre dossier.
        </p>
        <p className='mt-6'>
          Une fois votre dossier de candidature validé, un référent vous
          contactera pour le passage des tests et de l’entretien d’admission.
        </p>
        <div className='flex justify-center items-center mt-10'>
          <Image src={student} />
        </div>
        <div className=' font-Noto mt-5 text-gray-800'>
          Si vous disposez déjà d’un compte,
          <a className=' text-primary'>
            {" "}
            cliquez-ici pour compléter votre dossier de candidature existant.
          </a>
        </div>
      </div>
    </div>
  );
}
