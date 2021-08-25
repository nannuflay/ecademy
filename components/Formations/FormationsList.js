import Image from "next/image";
import { AiOutlineTeam } from "react-icons/ai";
import { Formations } from "../../pages/api/FormationsData";
import Link from "next/link";

const FormationsList = (props) => {
  return (
    <div className='flex flex-wrap container mx-auto justify-center'>
      {Formations.map((formation) => {
        return (
          formation.category == props.category && (
            <Link
              href={`/${props.category}/[id]`}
              as={`/${props.category}/${formation.id}`}>
              <div>
                <div
                  key={formation.id}
                  className='w-80 shadow-md  m-4 rounded-lg overflow-hidden border-b-4 hover:border-primary hover:scale-110 transform transition duration-500'>
                  <div>
                    <Image src={formation.banner} height={350} width={600} />
                  </div>
                  <div className=' m-4 '>
                    <h1 className='text-lg font-Noto text-gray-800 capitalize'>
                      {formation.name}
                    </h1>
                    <p className='text-sm font-Noto text-gray-400 mt-2'>
                      {formation.disc}
                    </p>
                    <div className='  mx-auto '>
                      <div className='flex w-full flex-wrap'>
                        {formation.Tags.map((tag, i) => {
                          return (
                            <div
                              className=' bg-gray-50  py-1 px-2 mr-1 rounded-full mt-2'
                              key={i}>
                              <span className='text-xs font-Noto text-gray-600 font-semibold'>
                                {tag}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        );
      })}
    </div>
  );
};

export default FormationsList;
