import React, { useEffect, useState, useRef } from "react";
import sampleImage from "../Images/Mascot-final.png";
import "../components/RegistrationForm.css";

function RegistrationForm() {
  const data = {
    name: "",
    email: "",
    message: "",
  };
  const [inputData, setInputData] = useState(data);

  function handleChange(event) {
    const shallowCopy = { ...inputData };
    shallowCopy[event.target.name] = event.target.value;
    setInputData(shallowCopy);
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5000/create-user", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });

      if (response.status == 200) {
        console.log("Data sending successful");
        setInputData(data);
      } else {
        console.log("Some error occured ");
      }
    } catch (e) {
      console.log("Error sending data to server", e);
    }
  };

  return (
    <>
      <div className="bg-black contact">
        <p className="text-white text-center leading-8 pt-4">
          17, 24th Main Rd, 3rd Cross Rd, Agara Village, 1st Sector, HSR Layout,
          Bengaluru, Karnataka 560102 <br />
          info@dailybite.in | + 1236547890
        </p>
        <div>
          {/* form data  */}
          <div className="flex items-center justify-center ">
            {/* Image container  */}

            <div className="">
              <img src={sampleImage} alt="" className="p-10 registration-img" />
            </div>

            {/* form container  */}
            <div className="flex flex-col md:flex-col w-1/2">
              <h2 className="text-[#FF5A11] text-bold text-4xl mb-5">
                Contact Information
              </h2>

              {/* form input  */}

              {/* Name  */}

              <input
                type="text"
                name="name"
                id="username"
                placeholder="Name"
                className="p-3 pl-4 mt-5 border rounded-full focus:outline-none focus:shadow-outline text-bold"
                value={inputData.name}
                onChange={handleChange}
              />

              {/* Email  */}
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="p-3 pl-4 mt-5 border rounded-full focus:outline-none focus:shadow-outline text-bold"
                value={inputData.email}
                onChange={handleChange}
              />

              {/* Message  */}
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Message"
                className="p-3 pl-4 mt-5 border rounded-full focus:outline-none focus:shadow-outline text-bold"
                value={inputData.message}
                onChange={handleChange}
              />

              <button
                className="p-3 pl-4 mt-5 w-40 border focus:shadow-outline text-bold bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline "
                type="button"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationForm;
