import React, { useState } from "react";
import ArrCard from "./ArrCard/ArrCard";
import { toast } from "react-toastify";

const Card = ({ data, setPurchesType, purchesType, setCount , count , setPrice , price}) => {
  
    const [buy, setBuy] = useState(false);


    const addtocart = () => {

        const isExist = purchesType.find(item => item.id === data.id);
        let totalPrice;

    if (!isExist) {
        totalPrice = price + data.price;
        setPrice(totalPrice);
        setBuy(true);
        const newArr = [...purchesType, data];
        setPurchesType(newArr);
        setCount(purchesType.length + 1);
        // console.log(purchesType.length);
        // alert("Product added to cart!");
        toast.success(`${data.name} add to Cart`);
    } else {
        // alert("Already in cart!");
        toast.error("Already in Cart");
        }
        
        // console.log(count);
}

  return (
    <div>
      <div className="card  bg-base-100 shadow-sm h-full">
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
            <button onClick={ addtocart } className={`btn btn-primary btn-block rounded-full  ${buy === true ?  "bg-green-500 text-white" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"}` }>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
