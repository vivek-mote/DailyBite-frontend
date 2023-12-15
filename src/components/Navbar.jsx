import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { HiMenu } from "react-icons/hi";
import { IoHeart } from "react-icons/io5";
import { IoMdCart } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

import Logo from "../Images/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menuBtn
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //functionalaity for sticky navbar ---> while scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 h-[109px]">
      <nav
        className={`py-4 md:px-20 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
        }`}
      >
        {/* form larger devices  */}
        <div className="flex items-center justify-between">
          {/* for logo  */}
          <div className="cursor-pointer">
            <Link to="/">
              <img src={Logo} alt="Company logo" className="h-12" />
            </Link>
          </div>

          {/* menu item for large devices  */}
          <div className="lg:flex items-center hidden text-body text-lg gap-4">
            <Link
              to="/"
              className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 px-4 cursor-pointer hover:text-gray-400"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block py-2 px-4 cursor-pointer hover:text-gray-400"
            >
              Contact
            </Link>
          </div>

          {/* contact me btn */}
          <div className=" lg:block hidden">
            <div className="flex left-20 gap-2">
              <div className=" flex items-center  gap-2 px-4 py-2 bg-transparent border border-primary text-primary rounded-md ">
                <IoSearchSharp />
                <input
                  type="text"
                  className="outline-none"
                  placeholder="Search"
                />
              </div>
              {/* like and heart button  */}
              <div className="border border-red-500 p-2 text-red-500 rounded-full hover:cursor-pointer">
                <IoHeart className="text-red-500 " />
              </div>
              <div className="border border-red-500 p-2 text-red-500 rounded-full hover:cursor-pointer">
                <IoMdCart className="text-red-500" />
              </div>
            </div>
          </div>

          {/* Menu button for the mobile devices  */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Menu item for the small devices  */}
        {isMenuOpen && (
          <div className="mt-4 p-4 bg-body bg-primary rounded-lg">
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer text-white hover:text-gray-800"
            >
              Home
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer hover:text-gray-900"
            >
              About
            </a>
            <a
              href="/"
              className="block py-2 px-4 cursor-pointer hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
