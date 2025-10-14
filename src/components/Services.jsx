import React from "react";
import logo1 from "../assets/content_icon.svg";

const Services = () => {
  const Content = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      logo: logo1,
    },
    {
      title: "Content Marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage and...",
      logo: logo1,
    },
    {
      title: "Content Writing",
      description:
        "We turn bold ideas into powerful digital solutions that connect...",
      logo: logo1,
    },
    {
      title: "Social Media",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      logo: logo1,
    },
  ];

  return (
    <div
      id="Services"
      className="w-full flex flex-col items-center text-center py-10 px-4 sm:px-8 bg-[#F8F9FB]"
    >
      {/* Title */}
      <h1 className="text-[28px] sm:text-[40px] font-semibold text-[#3B3B3B] mb-3">
        Our Services
      </h1>
      <p className="text-[#8A8E9B] text-sm sm:text-base mb-8 max-w-lg">
        Delivering creative digital solutions that help your brand stand out and grow.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-6xl justify-items-center">
        {Content.map((content, index) => (
          <div
            key={index}
            className="w-full max-w-[330px] sm:max-w-[350px] h-auto bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center sm:items-start gap-4 text-left shadow-sm hover:shadow-md transition-all"
          >
            <img
              src={content.logo}
              alt={content.title}
              className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0"
            />
            <div className="flex flex-col text-center sm:text-left">
              <h2 className="text-base sm:text-lg font-bold text-[#3B3B3B]">
                {content.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#828282] mt-1 leading-snug">
                {content.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
