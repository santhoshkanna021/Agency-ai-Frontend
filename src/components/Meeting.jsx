import React from 'react'

const Meeting = () => {

  const TeamData = [
    { name: 'Haley Carter', title: 'CEO & founder', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200' },
    { name: 'James Walker', title: 'Ads manager', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200' },
    { name: 'Jessica Morgan', title: 'Vice president', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop' },
    { name: 'Ashley Bennett', title: 'Marketing & sales', image: 'https://randomuser.me/api/portraits/women/10.jpg' },
    { name: 'Emily Parker', title: 'Content marketer', image: 'https://randomuser.me/api/portraits/women/11.jpg' },
    { name: 'Ryan Mitchell', title: 'Content writer', image: 'https://randomuser.me/api/portraits/men/9.jpg' },
    { name: 'Megan Brooks', title: 'Performance manager', image: 'https://randomuser.me/api/portraits/women/12.jpg' },
    { name: 'Amber Foster', title: 'Senior writer', image: 'https://randomuser.me/api/portraits/women/14.jpg' },
  ]

  return (
    <div className='flex flex-col items-center text-center w-full h-full gap-8 py-10'>

      {/* Title */}
      <h1 className='text-[50px] text-[#3B3B3B]'>
        Meet the team
      </h1>

      {/* Paragraph */}
      <p className='text-[#8A8E9B] max-w-lg'>
        A passionate team of digital experts dedicated to your brands<br /> success.
      </p>

      {/* Team Members */}
      <div className='flex flex-wrap justify-center gap-5 sm:px-10 py-10 '>
        {TeamData.map((data, index) => (
          <div key={index} className='w-[230px] h-[90px] bg-white p-4 rounded-2xl shadow-lg flex  items-center gap-4 '>
            <img src={data.image} alt={data.name} className="w-[50px] h-[50px] rounded-full object-cover" />

            <div className='flex flex-col items-start'>
            <h2 className='text-sm font-semibold text-[#5B5D63]'>{data.name}</h2>
            <p className='text-xs text-[#9A9EA8]'>{data.title}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Meeting
