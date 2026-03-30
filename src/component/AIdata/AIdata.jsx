import React, { use, useState } from "react";
import AIdataCard from "../AIdataCard/AIdataCard";
import SelectedData from "../SelectedData/SelectedData";

const AIdata = ({ AIdataPromice , setCount , count}) => {
    const AIdatas = use(AIdataPromice);
    const [selectedType, setSelectedType] = useState("products");
    const [purchesType, setPurchesType] = useState([]);
    
    // const navDisplay = (cnt) => {
    //     console.log("Button Clicked! Current Cart Count:", cnt);

    // }
    // console.log(AIdatas);
  return (
      <div>
          


      <div className="w[80%] mx-auto container p-10 flex justify-center items-center flex-col space-y-4 mb-5">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p className="text-[#627382] text-center">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="inline-flex items-center p-1 border border-gray-100 rounded-full bg-white shadow-sm gap-1">
          {/* <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white border-none rounded-full"> Get Started</button> */}
                  <button onClick={() => setSelectedType("products")} className={`btn border-none rounded-full ${selectedType === "products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} `}> Get Started</button>
                  
                  <button onClick={() =>  setSelectedType("cart") } className={`btn border-none rounded-full ${selectedType === "cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""} `}> Cart({purchesType.length})</button>
          {/* <button className="btn rounded-full">Cart()</button> */}
        </div>
          </div>
          

          <div className="">
              {selectedType === "products" ? (<AIdataCard count={count} setCount={setCount} AIdatas={AIdatas} purchesType={purchesType} setPurchesType={setPurchesType}></AIdataCard>) : (<SelectedData setCount={setCount} purchesType={purchesType} setPurchesType = {setPurchesType}></SelectedData>)
              }
          </div>


    </div>
  );
};

export default AIdata;
