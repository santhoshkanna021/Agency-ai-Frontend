import React, { useState } from "react";
import assets from "../assets/assets";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setIsSending(true);

    const params = new URLSearchParams(formData).toString(); // Convert form data to query string

    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbxxPzAvtrNe8VLfCDcJcPOsQFuRBw-z5CISyUyjhUATefYA6hsdLSm6LW4Mj-7l1A29Tw/exec?${params}`
      );

      const result = await response.json();

      if (result.status === "success") {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.error(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id='contact' className='flex flex-col items-center text-center w-full h-full gap-8 py-10 px-4 sm:py-15 sm:px-0'>
      <h1 className='text-[35px] sm:text-[50px] text-[#3B3B3B]'>Reach out to us</h1>
      <p className='text-[#8A8E9B] max-w-lg'>
        From strategy to execution, we craft digital solutions that move your<br /> business forward.
      </p>

      <form className="w-full max-w-2xl mx-auto py-6 sm:py-10 px-2 sm:px-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4 mb-6 text-start">
          <div className="w-full sm:w-1/2">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
            <input 
              id="name" 
              type="text" 
              placeholder="Enter your name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>

          <div className="w-full sm:w-1/2">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email ID</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
        </div>

        <div className="mb-6 text-start">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea 
            id="message" 
            rows="4" 
            placeholder="Enter your message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full h-[150px] sm:h-[200px] border rounded-lg p-3"
            required
          ></textarea>
        </div>

        <div className="w-full sm:w-[145px] h-[45px] bg-[#5044E5] text-white text-[14px] rounded-4xl flex items-center justify-center gap-2 mx-auto sm:mx-0">
          <button type="submit" disabled={isSending} className="flex items-center gap-2">
            {isSending ? "Sending..." : "Submit"}
            {!isSending && <img src={assets.arrow_icon} alt="arrow icon" className="w-3 h-3" />}
          </button>
        </div>

        {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
