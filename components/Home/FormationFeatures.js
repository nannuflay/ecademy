import { Features } from "../Formations/Features";
import { FiChevronDown } from "react-icons/fi";

export default function FormationFeatures() {
  return (
    <div className='mb-40'>
      <div className='flex flex-col text-center w-full font-Noto'>
        <div className='flex justify-center w-4/6 mx-auto relative my-10 '>
          <div className='w-40 border-b-2 mt-[1px]' />
          <FiChevronDown className='w-7 h-7 absolute -top-2 text-gray-200' />
          <div className='w-40 border-b-2 ml-3' />
        </div>
      </div>
      <div className='flex justify-between w-5/6 mx-auto mt-20'>
        <div className='w w-5/6'>
          <img src='https://themes.envytheme.com/ecademy/wp-content/uploads/2020/06/about-img10.png' />
        </div>
        <div className='flex flex-col w-4/6 '>
          <div className=' mx-4 font-Noto'>
            <h1 className=' text-4xl font-semibold'>
              Develop Your Skills, Learn Something New, and Grow Your Skills
              From Anywhere in the World!
            </h1>
            <p className='my-10 text-gray-400'>
              Laborum fugiat anim excepteur magna ullamco ipsum tempor dolore
              anim nostrud enim qui tempor. Veniam exercitation veniam minim
              magna id duis aliquip fugiat et est dolore minim laborum est.
              Minim consectetur fugiat nostrud sunt ex.
            </p>
          </div>
          <div className=' flex flex-wrap h-28 justify-between'>
            {Features.map((feature) => {
              return (
                <div key={feature.name} className='flex  select-none '>
                  <div>{feature.icon}</div>
                  <div className='flex flex-col -mt-1 ml-4'>
                    <h1 className=' font-semibold font-Noto  text-sm'>
                      {feature.name}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
