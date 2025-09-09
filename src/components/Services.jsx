import React from 'react'
import logo1 from "../assets/content_icon.svg"

const Services = () => {

  const Content = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      logo: logo1
    },
    {
      title: 'Content Marketing',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage and...',
      logo: logo1
    },
    {
      title: 'Content Writing',
      description: 'We turn bold ideas into powerful digital solutions that connect...',
      logo: logo1
    },
    {
      title: 'Social Media',
      description: 'We turn bold ideas into powerful digital solutions that connect, engage...',
      logo: logo1
    }
  ]

  return (
    <div id='Services' className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10 justify-items-center ">
      {Content.map((content, index) => (
        <div key={index} className="w-[350px] h-[100px] bg-white border  rounded-2xl p-4 flex  items-center gap-4 ">
          <img src={content.logo} alt={content.title} className="w-12 h-12 mb-4" />
          <div className='flex flex-col'>
          <h2 className="text-lg font-bold mb-2 text-[#3B3B3B]">{content.title}</h2>
          <p className="text-sm text-center text-[#828282]">{content.description}</p>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Services
