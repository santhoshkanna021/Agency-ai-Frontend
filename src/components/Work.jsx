import React from 'react'
import img1 from "../assets/work_mobile_app.png"
import img2 from "../assets/work_fitness_app.png"
import img3 from "../assets/work_dashboard_management.png"

const Work = () => {

  const Details = [
    {
      image: img1,
      title: "Mobile app marketing",
      paragraph: "We turn bold ideas into powerful digital solutions that connect..."
    },
    {
      image: img2,
      title: "Fitness app promotion",
      paragraph: "We help you create a marketing strategy that drives results."
    },
    {
      image: img3,
      title: "Dashboard management",
      paragraph: "We help you execute your plan and deliver results."
    }
  ];

  return (
    <div id='Ourwork' className='flex flex-col items-center text-center w-full h-full gap-5 py-16 px-5 sm:px-10'>

      {/* Title */}
      <h1 className='text-3xl sm:text-5xl font-bold text-[#3B3B3B]'>
        Our latest work
      </h1>

      {/* Paragraph */}
      <p className='text-[#8A8E9B] max-w-xl text-sm sm:text-base leading-relaxed'>
        From strategy to execution, we craft digital solutions that move your<br className='hidden sm:block' /> business forward.
      </p>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 w-full max-w-6xl'>
        {Details.map((project, index) => (
          <div key={index} className='flex flex-col items-start text-start gap-3 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-2xl'>
            
            {/* Image */}
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-xl object-cover" />

            {/* Text */}
            <h2 className='text-lg sm:text-xl font-semibold text-[#3B3B3B]'>{project.title}</h2>
            <p className='text-[#8A8E9B] text-sm sm:text-base'>{project.paragraph}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Work
