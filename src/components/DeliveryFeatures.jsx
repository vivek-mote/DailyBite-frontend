import React from "react";
import DeliveryPic from "../Images/MascotWesite.png";
import FeatureCard from "./FeatureCard";

const DeliveryFeatures = () => {
  return (
    <div className="feature">
      {/* banner  */}
      <div className=" flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-20 my-4 sm:my-10 ">
        {/* banner left -Text  */}
        <div className="text-[#FF5A11] text-extrabold font-bold text-4xl mb-5 ">
          <h2>
            INDIA'S
            <br />
            FIRST PERSONALISED <br />
            DAILY CORPORATE MEAL <br />
            DELIVERY PLATFORM
          </h2>
        </div>

        {/* Banner top right - imgae  */}
        <div className="">
          <img src={DeliveryPic} alt="" className="h-64 w-56" />
        </div>
      </div>

      {/* delivery feature goes here  */}

      <div className="p-20 bg-black text-white">
        <FeatureCard />
      </div>

      {/* <div className="border border-orange-100 ">
</div> */}
    </div>
  );
};

export default DeliveryFeatures;
