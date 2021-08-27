import Image from "next/image";
import { AiOutlineTeam } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { Formations } from "../../pages/api/FormationsData";
import Link from "next/link";

const FormationsList = (props) => {
  return (
    <div className='flex flex-wrap container mx-auto w-5/6'>
      {Formations.map((formation) => {
        return (
          formation.category == props.category && (
            <Link
              href={`/Formations/${props.category}/[id]`}
              as={`/Formations/${props.category}/${formation.id}`}>
              <div>
                <div
                  key={formation.id}
                  className='flex flex-col sm:w-60 m-4 overflow-hidden mt-10 hover:shadow hover:bg-white rounded hover:scale-110 transition transform duration-500'>
                  <Image src={formation.banner} height={150} width={240} />
                  <div className='p-2'>
                    <div className=''>
                      <span className='text-[12px] font-semibold text-gray-700 font-Noto mt-2'>
                        {" "}
                        {formation.name}{" "}
                      </span>
                    </div>
                    <div className='flex justify-between mt-2'>
                      <div className='flex items-center font-Noto text-xs text-gray-500'>
                        <AiOutlineTeam className=' w-5 h-5 mr-1 text-red-400' />
                        <span> {formation.students} </span>
                      </div>
                      <div className='flex items-center font-Noto text-xs text-gray-500'>
                        <BiTime className='w-5 h-5 mr-1 text-red-400' />
                        <span className=' '> {formation.duration} heurs</span>
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
