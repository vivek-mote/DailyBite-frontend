import React from "react";
import Mobile from "../Images/Mobile-1.png";
import Girl from "../Images/Mascot-girl-website.png";

const AppSection = () => {
  return (
    <div className=" px-20">
      <div className="flex items-center justify-around ">
        {/* left img  */}
        <div className="-translate-y-1/4">
          <img src={Mobile} alt="Mobile Image" className="w-full" />
        </div>
        {/* middle img  */}
        <div>
          <div className="flex flex-col items-center justify-center">
            <img src={Girl} alt="Girl Image" className="w-56 h-60" />
            <h3 className="text-4xl font-extrabold text-center mt-2">
              LAUNCHING <br /> <span className="text-[#FF5A11]">APP SOON</span>
            </h3>
          </div>
        </div>
        {/* right img  */}
        <div className="translate-y-1/4">
          <img src={Mobile} alt="Mobile Image" />
        </div>

        {/* text  */}
      </div>
    </div>
  );
};

export default AppSection;
