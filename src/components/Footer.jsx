import React from "react";

import Youtube from "../Images/Youtube.png";
import Facebook from "../Images/facebook.png";
import Instagram from "../Images/insta.png";
import Twitter from "../Images/twitter.png";
import LinkedIn from "../Images/linkden.png";

const social = [
  // {
  //     "id":1,
  //     "image":Youtube,
  // },

  {
    id: 2,
    image: Facebook,
  },

  {
    id: 3,
    image: Instagram,
  },
  {
    id: 4,
    image: Twitter,
  },
  {
    id: 5,
    image: LinkedIn,
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col text-center  mt-3">
      <div>
        <p>Follow us</p>
      </div>

      {/* Images  */}
      <div className="flex items-center justify-center  w-full mt-0">
        {social.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt="" className="h-20 w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
