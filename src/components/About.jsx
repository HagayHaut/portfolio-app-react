import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Hagay, thanks for visiting. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a graduate of Flatiron School Software Engineering program, and a professional learner. I hold a degree in Environmental Science, and have transitioned to technology after a successful career leading teams to improve public lands. The desire to understand and improve the systems around me brought me here, and the endless opportunity for learning and growth keep me here.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
