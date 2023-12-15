import React from "react";

// import the images
import { IoHeart } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";

const Card = ({ foodData }) => {
  const { id, image, name, description } = foodData;
  return (
    <>
      <div className="grid  border p-5 border-red-600 rounded-md shadow-md w-64 h-72">
        <div>
          <img src={image} alt="" className="w-20 h-20 items-center" />
        </div>

        {/* data  */}
        <div className="mt-4">
          <h3 className="text-[#FF5A11] font-bold">{name}</h3>
          <p className="text-sm">{description}</p>
        </div>

        {/* like and cart  */}
        <div className="flex  items-end left-20 gap-2">
          <div className="border border-[#FF5A11] p-2 text-[#FF5A11] rounded-full">
            <IoHeart className="text-[#FF5A11] " />
          </div>
          <div className="border border-[#FF5A11] p-2 text-[#FF5A11] rounded-full">
            <IoMdCart className="text-[#FF5A11]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
