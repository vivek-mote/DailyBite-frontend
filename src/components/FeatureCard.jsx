import React from "react";

import img1 from "../Images/Layer1.png";
import img2 from "../Images/Layer2.png";
import img3 from "../Images/Layer3.png";
import img4 from "../Images/Layer4.png";
import img5 from "../Images/Layer5.png";
import img6 from "../Images/Layer5.png";

const features = [
  {
    id: 1,
    image: img1,
    heading: "Ghar Jaisa khana",
    comment:
      "Delivering the comfort of home-cooked meals, straight to your workspace",
  },
  {
    id: 2,
    image: img2,
    heading: "Free Delivery",
    comment:
      "Nourishment comes with no extra cost - enjoy free delivery with every order.",
  },
  {
    id: 3,
    image: img3,
    heading: "Daily On-Time",
    comment: "Expect your meal right on time, every single day.",
  },
  {
    id: 4,
    image: img4,
    heading: "Healthy Meal",
    comment: "toward a healthier you",
  },
  {
    id: 5,
    image: img5,
    heading: "One Click Customization",
    comment: "just a click to create your ideal meal.",
  },
  {
    id: 6,
    image: img6,
    heading: "Pause or Cancel Anytime",
    comment: "Life's unpredictable? No problem. Flexibility at your fingertips",
  },
];

const FeatureCard = () => {
  return (
    <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-1 ">
      {features.map((feature) => (
        <div key={feature.id} className=" p-3 text-center">
          <div className="flex items-center justify-center">
            <img
              src={feature.image}
              alt="Feature Image"
              className="w-32 h-32 text-center p-2 m-3"
            />
          </div>
          <h3 className="text-xl mb-5 text-center">{feature.heading}</h3>
          <p>{feature.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
