import React from "react";
import assets from "../assets/assets";

// Import images directly
import microsoft_logo from "../assets/microsoft_logo.png";
import zoom_logo from "../assets/zoom_logo.png";
import rakuten_logo from "../assets/rakuten_logo.png";
import coinbase_icon from "../assets/coinbase_logo.png";
import airbnb_logo from "../assets/airbnb_logo.svg";

const Images = [
  { name: "microsoft", src: microsoft_logo },
  { name: "zoom", src: zoom_logo },
  { name: "rakuten", src: rakuten_logo },
  { name: "coinbase", src: coinbase_icon },
  { name: "airbnb", src: airbnb_logo },
];

const Header = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center text-center py-24 sm:py-40 gap-10 px-4 w-full h-full"
    >
      {/* Top Badge */}
      <div className="flex gap-2 items-center border rounded-full border-[#B6B6B6] p-2 px-4">
        <img
          className="w-[50px] sm:w-[80px]"
          src={assets.group_profile}
          alt="group_profile"
        />
        <h1 className="text-[#373737] text-[10px] sm:text-[12px]">
          Trusted by 10k+ people
        </h1>
      </div>

      {/* Hero Title */}
      <h1 className="font-bold text-4xl sm:text-xl lg:text-7xl text-center text-[#3B3B3B] max-w-4xl mx-auto leading-tight">
        Turning imagination <br className="hidden sm:block" />
        into
        <span className="text-[#5044E5]"> digital </span>
        impact.
      </h1>

      {/* Description */}
      <p className="text-[#475569] text-base sm:text-lg md:text-xl leading-relaxed">
        Creating meaningful connections and turning big ideas into <br className="hidden sm:block" />
        interactive digital experiences.
      </p>

      {/* Hero Image */}
      <img
        className="w-[280px] sm:w-[400px] md:w-[550px] lg:w-[700px] h-auto mt-4"
        src={assets.hero_img}
        alt="hero_image"
      />

      {/* Trusted Companies Section */}
      <h1 className="text-[#475569] pt-10 text-sm sm:text-base">
        Trusted by Leading Companies
      </h1>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {Images.map((img, index) => (
          <img
            className="w-[80px] sm:w-[100px] md:w-[120px]"
            key={index}
            src={img.src}
            alt={img.name}
          />
        ))}
      </div>

      {/* Bottom Section */}
      <h1 className="text-[#3B3B3B] text-3xl sm:text-4xl md:text-5xl mt-10 sm:mt-16 font-semibold">
        How can we help?
      </h1>

      <p className="text-[#8A8E9B] text-sm sm:text-base md:text-lg leading-relaxed">
        From strategy to execution, we craft digital solutions that move your <br className="hidden sm:block" />
        business forward.
      </p>
    </div>
  );
};

export default Header;
