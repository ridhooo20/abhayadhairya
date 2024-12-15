import React from "react";
import odd24 from "../img/odd24.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <section className="navvv">
      <nav className="navbar flex justify-between p-3 top-0 fixed z-50 ">
        <div className="flex item items-center">
          <img src={odd24} className="w-12 h-12" />
          <a href="#" className="font-bold text-white text-xl px-3">
            Abhaya Dhairya 2024
          </a>
        </div>

        <div className="navbar-nav ">
          <a
            href="#"
            className="hidden lg:inline px-5 font-bold text-white text-xl hover:text-lime-600 ease-in-out duration-300"
          >
            Home
          </a>
          <a
            href="#Home"
            className="hidden lg:inline px-5 font-bold text-white text-xl hover:text-lime-600 ease-in-out duration-300"
          >
            About Us
          </a>
          <a
            href="#album"
            className="hidden lg:inline px-5 font-bold text-white text-xl hover:text-lime-600 ease-in-out duration-300"
          >
            Album
          </a>
          <a
            className="px-5 font-bold text-white text-xl hover:text-lime-600 ease-in-out duration-300"
            href="/Loginabhaya"
            id="login"
          >
            Login
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
