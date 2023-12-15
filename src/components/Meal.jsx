import React from "react";

import ladiesPic from "../Images/MascotChoices.png";

// import the images
import img1 from "../Images/Mixed-Fruit-Bowl.png";
import Card from "./Card";

// create data for the card
const mealData = [
  {
    id: 1,
    image: img1,
    name: "Fruit Bowl",
    description:
      "Variety Ranging from Banana, Apple, Orange, Grapes, Watermelon, Papaya and many seasonal fruits",
  },
  {
    id: 2,
    image: img1,
    name: "Standard Veg Meal",
    description: "Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad",
  },
  {
    id: 3,
    image: img1,
    name: "Privilege Veg Meal",
    description:
      "Rice + Dal + 2 Roti + Gravy Sabji + Dry Sabji + Salad + Sweet + Curd + Papad",
  },
];

const Meal = () => {
  return (
    <div className="px-20 mt-10">
      <div>
        {/* label  */}
        <p className="text-2xl">Choose your</p>
        <h3 className="text-[#FF5A11] font-bold text-6xl">MEAL</h3>
      </div>

      {/* Actual section  */}
      <div className="flex mt-10">
        {/* Image  */}
        <div className=" w-1/4">
          <img src={ladiesPic} alt="" className="w-80 h-96" />
        </div>

        {/* card list  */}
        <div className="flex w-3/4 gap-10 m-2 justify-center items-center">
          {mealData.map((data) => (
            <div key={data.id}>
              <Card foodData={data} />
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Meal;
