import React from "react";
import circleImg from "../../../assets/Group 5.png";
import bannerImg from "../../../assets/banner.png"
import { CiPlay1 } from "react-icons/ci";
const Banner = () => {
  return (
    <div className="w-[90%] container gap-10 mx-auto py-20 flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="space-y-4">
              <div className="inline-flex rounded-full bg-[#E1E7FF] px-3 py-1 items-center">
                  <div><img src={circleImg} alt="" /></div>
                  <p className=" bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">New: AI-Powered Tools Available</p> 
              </div>
        <h2 className="text-5xl font-bold">
          Supercharge Your <br /> Digital Workflow
        </h2>
        <p className="text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today.
          <br /> Explore Products
        </p>
        <div className="flex items-center gap-4">
          <button className=" btn bg-linear-to-r from-[#4F39F6]/80 to-[#9514FA]/80 text-white border-none rounded-full">
            Explore Products
          </button>
          <button className="p-[1px] rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <span className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-purple-600">
              <CiPlay1></CiPlay1> Watch Demo
            </span>
          </button>
        </div>
          </div>
          

          <div className="p-4">
              <img src={bannerImg} alt="" className=" w-full" />
          </div>
          

    </div>
  );
};

export default Banner;
