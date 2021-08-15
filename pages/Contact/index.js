import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import dynamic from "next/dynamic";
import Image from "next/image";
import ContactInfos from "../../components/contact/ContactInfos";
import ContactForm from "../../components/contact/ContactForm";
import VectorMail from "../../public/assets/email.png";

const DynamicMap = dynamic(
  () => import("../../components/contact/Map.js"),

  { loading: () => <p>A map is loading</p>, ssr: false }
);

export default function Contact() {
  return (
    <div>
      <Header />
      <div className='w-5/6 mx-auto'>
        <div className='flex flex-col font-Noto  pt-20  '>
          <h1 className='text-2xl text-gray-800'>CONTACTEZ-NOUS PAR EMAIL</h1>
          <p className=' mt-2 text-sm text-gray-500'>
            Veuillez nous laisser un message et il nous fera plaisir de vous
            répondre dans le plus bref délai.
          </p>
        </div>
        <div
          className='flex justify-between mt-6
           h-[600px]'>
          <Image src={VectorMail} width={600} height={500} className='' />
          <div className='w-2/6 '>
            <ContactForm />
          </div>
        </div>
        <div className='flex justify-between mx-auto my-6'>
          <div className='w-2/6'>
            <ContactInfos />
          </div>
          <div className='w-4/6 h-[270px]'>
            <DynamicMap />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
