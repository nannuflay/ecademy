import Image from "next/image";
import Header from "../../../components/Header/Header";
import { Formations } from "../../api/FormationsData";

export const getStaticProps = async ({ params }) => {
  const formations = Formations.filter((p) => p.id.toString() === params.id);
  return {
    props: {
      lesson: formations[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = Formations.map((lesson) => ({
    params: { id: lesson.id.toString() },
  }));
  return { paths, fallback: false };
};

export default ({ lesson }) => (
  <div>
    <Header />
    <div className='bg-base-200  px-10 py-4'>
      <div class='text-sm breadcrumbs font-Noto font-medium text-gray-700'>
        <ul>
          <li>
            <a>Acceuil</a>
          </li>
          <li>
            <a>Web Developement</a>
          </li>
        </ul>
      </div>
      <div className='justify-between flex items-center mt-6'>
        <div className='w-3/6'>
          <h1 className='text-4xl font-semibold font-Noto'>{lesson.name}</h1>
          <p className='text-lg text-gray-600 mt-2'>{lesson.disc}</p>
        </div>
        <div>
          <Image
            src={lesson.banner}
            class='max-w-sm rounded-lg shadow-2xl'
            height={300}
            width={500}
          />
        </div>
      </div>
    </div>
  </div>
);
