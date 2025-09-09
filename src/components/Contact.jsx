import React from 'react'
import assets from '../assets/assets'

const Contact = () => {
  return (
    <div id='contact' className='flex flex-col items-center text-center w-full h-full gap-8 py-15'>

         {/* Title */}
      <h1 className='text-[50px] text-[#3B3B3B]'>
      Reach out to us
      </h1>

      {/* Paragraph */}
      <p className='text-[#8A8E9B] max-w-lg'>
      From strategy to execution, we craft digital solutions that move your<br/> business forward.
      </p>




      {/* Form */}
<form className="w-full max-w-2xl mx-auto py-10 px-4">

{/* Name and Email Fields */}
<div className="flex flex-col sm:flex-row gap-4 mb-6 text-start">
  
  {/* Name Field */}
  <div className="w-full sm:w-1/2">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
      Your Name
    </label>
    <input
      id="name"
      type="text"
      placeholder="Enter your name"
      className="w-full px-4 py-2 border rounded-lg "
    />
  </div>

  {/* Email Field */}
  <div className="w-full sm:w-1/2">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
      Email ID
    </label>
    <input
      id="email"
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 border rounded-lg"
    />
  </div>

</div>

{/* Message Field */}
<div className="mb-6 text-start ">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
    Message
  </label>
  <textarea
    id="message"
    rows="4"
    placeholder="Enter Your message"
    className="w-full h-[200px] border  rounded-lg p-3"
  ></textarea>
</div>


{/* Submit Button */}

  <div  className="w-[145px] h-[45px] bg-[#5044E5] text-white text-[14px] rounded-4xl flex items-center justify-center gap-2">
          <button type="submit">Submit</button>
          <img src={assets.arrow_icon} alt="arrow icon" className="w-3 h-3" />
        </div>


</form>



    </div>
  )
}

export default Contact