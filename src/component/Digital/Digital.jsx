import React from "react";

const Digital = () => {
  return (
    <div className="max-w-[1200px] mx-auto container p-10 flex justify-center items-center flex-col space-y-4 mb-5">
      <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
      <p className="text-[#627382] text-center">
        Choose from our curated collection of premium digital products designed{" "}
        <br /> to boost your productivity and creativity.
      </p>

      <div className="inline-flex items-center p-1 border border-gray-100 rounded-full bg-white shadow-sm gap-1">
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full">
          Get Started
        </button>
        <button className="btn rounded-full">Cart()</button>
      </div>
    </div>
  );
};

export default Digital;
