import React, { useState } from "react";
import ArrCard from "./ArrCard/ArrCard";

const Card = ({ data, setPurchesType, purchesType }) => {
  
    const [buy, setBuy] = useState(false);
    const addtocart = () => {
        setBuy(true);
        alert("ok");
        const arr = [...purchesType, data];
        setPurchesType(arr);
    }

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <button className="btn w-10 h-10 flex items-center justify-center rounded-full border border-gray-100 bg-white shadow-sm">
              <span className="border-gray-100 rounded-full">{data.icon}</span>
            </button>
            <span
              className={`badge badge-soft 
    ${
      data.tag === "new"
        ? "badge-success"
        : data.tag === "popular"
          ? "badge-primary"
          : data.tag === "best seller"
            ? "badge-warning"
            : "" // Default condition
    }`}
            >
              {data.tag}
            </span>
          </div>
          <div className="flex justify-between">
                      <h2 className="text-2xl font-bold">{ data.name}</h2>
                      
          </div>
          
                  <p className="text-[#627382]">{data.description}</p>
                  <p className="text-2xl font-bold">${data.price}<span className="text-[#627382] font-normal text-xl">/{data.period}</span></p>
                  
          <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
            
                      {
                          data.features.map((card , ind) => <ArrCard key={ind} card={card}></ArrCard>)
                      }
          </ul>
          <div className="mt-6">
            <button onClick={ addtocart } className="btn btn-primary btn-block rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
