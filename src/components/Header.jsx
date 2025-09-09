import React from 'react'
import assets from '../assets/assets'

// Import images directly
import microsoft_logo from '../assets/microsoft_logo.png'
import zoom_logo from '../assets/zoom_logo.png'
import rakuten_logo from '../assets/rakuten_logo.png'
import coinbase_icon from "../assets/coinbase_logo.png"
import airbnb_logo from "../assets/airbnb_logo.svg"

const Images = [
  { name: 'microsoft', src: microsoft_logo },
  { name: 'zoom', src: zoom_logo },
  { name: 'rakuten', src: rakuten_logo },
  { name: 'coinbase', src: coinbase_icon },
  { name: 'airbnb', src: airbnb_logo }

]

const Header = () => {
  return (
    <div id='home' className='flex flex-col items-center text-center py-40 gap-10 w-full h-full'>

      <div className='flex gap-2 items-center border rounded-4xl border-[#B6B6B6] p-2'>
        <img className="w-[80px]" src={assets.group_profile} alt="group_profile"/>
        <h1 className='text-[#373737] text-[12px]'>
          Trusted by 10k+ people
        </h1>
      </div>

      <h1 className="font-bold text-[80px]  text-center text-[#3B3B3B] max-w-4xl mx-auto">
  Turning imagination <br />
  into
  <span className="text-[#5044E5]"> digital </span>
  impact.
</h1>

      <p className='text-[#475569] text-xl'>
        Creating meaningful connections and turning big ideas into <br/>interactive digital experiences.
      </p>

      <img className='w-250 h-125' src={assets.hero_img} alt="hero_image"/>

      <h1 className='text-[#475569] py-10'>Trusted by Leading Companies</h1>

      <div className='flex gap-10 flex-wrap justify-center'>
        {Images.map((img, index) => (
          <img className="w-[120px]" key={index} src={img.src} alt={img.name} />
        ))}
      </div>

      <h1 className='text-[#3B3B3B] text-[50px] mt-30'>
      How can we help?
      </h1>


      <p className='text-[#8A8E9B]'>
      From strategy to execution, we craft digital solutions that move your <br/> business forward.
      </p>

    </div>
  )
}

export default Header
