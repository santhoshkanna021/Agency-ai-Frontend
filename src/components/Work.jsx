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
    <div id='Ourwork' className='flex flex-col items-center text-center w-full h-full gap-5 py-20'>

      {/* Title */}
      <h1 className='text-[50px] text-[#3B3B3B]'>
        Our latest work
      </h1>

      {/* Paragraph */}
      <p className='text-[#8A8E9B] max-w-lg'>
        From strategy to execution, we craft digital solutions that move your<br /> business forward.
      </p>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-3  px-10 sm:px-30 items-center'>
        {Details.map((project, index) => (
          <div key={index} className='flex flex-col items-start text-start gap-4 bg-white p-6 rounded-lg'>


            {/* Image placeholder */}
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-md" />


            <h2 className='text-lg font-bold text-[#3B3B3B] '>{project.title}</h2>
            <p className='text-[#8A8E9B] text-sm w-[210px]'>{project.paragraph}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Work
