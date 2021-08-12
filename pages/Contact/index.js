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
      <div className="w-5/6 mx-auto">
        <div className="flex flex-col font-Noto  pt-20  ">
          <h1 className="text-4xl text-gray-800">
            Contact:
          </h1>
          <div className=" border-t-4 w-16 border-green-500 rounded-md mt-4 " />
        </div>
        <div
          className="flex justify-around mt-6
       ContactBg bg-gradient-to-bl from-green-500 p-4 h-[600px]"
        >
          <div className="w-2/6 ">
            <ContactForm />
          </div>
          <Image
            src={VectorMail}
            width={600}
            height={500}
            className=""
          />
        </div>
        <div className="flex flex-col font-Noto">
          <h1 className="text-4xl  text-gray-800">
            Plus d'information:
          </h1>
          <div className=" border-t-4 w-16 border-green-500 rounded-md mt-4 " />
        </div>
        <div className="flex justify-between mx-auto my-6">
          <div className="w-2/6">
            <ContactInfos />
          </div>
          <div className="w-4/6 h-[270px]">
            <DynamicMap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
