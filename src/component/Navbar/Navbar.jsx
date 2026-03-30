import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="">
      <div className="navbar bg-base-100  max-w-[1200px] container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <h2 className="text-2xl  font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            DigiTools
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 text-[#101727]">
            <li>Products</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <FaCartShopping></FaCartShopping>
            <p>Login</p>
            {/* <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"><button className="btn btn-active btn-primary rounded-[9999px] ">Get Started</button></span> */}
            <button className="btn bg-linear-to-r from-[#4F39F6]/80 to-[#9514FA]/80 text-white border-none rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="divider m-0"></div>
    </div>
  );
};

export default Navbar;
