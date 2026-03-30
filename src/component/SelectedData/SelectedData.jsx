import React from "react";
import EmptySelectedData from "./EmptySelectedData/EmptySelectedData";
import AddSelectdData from "./AddSelectdData/AddSelectdData";
import { FaShoppingCart } from "react-icons/fa";

const SelectedData = ({ purchesType, setPurchesType }) => {
    // console.log(purchesType);
    
    const RemoveData = (data) => {
        console.log(data);
        const filterArr = purchesType.filter(rem => rem.id != data.id);
        setPurchesType(filterArr)
    }

  return (
    <div>
      <div className="card w-full bg-base-300 shadow-lg py-10 px-10 my-10 space-y-8">
        <p className="text-xl font-bold">Your Cart</p>
        {purchesType.length === 0 ? (
          <div className="flex justify-center items-center flex-col text-[#627382]">
            <FaShoppingCart></FaShoppingCart>
            <p>Your Cart is empty</p>
          </div>
        ) : (
          purchesType.map((data, ind) => {
            return (
              <div key={ind}>
                <div className="flex justify-between items-center bg-white rounded-2xl p-5">
                  <div className="flex  gap-3 items-center">
                    <div>
                      <span>{data.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{data.name}</h2>
                      <p className="text-[#627382]">${data.price}</p>
                    </div>
                  </div>
                  <div>
                    <button onClick={() => RemoveData(data)} className="text-red-500 btn">Remove</button>
                  </div>
                </div>
              </div>
            );
          })
        )}

        
          {purchesType.length !== 0 ? (
            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-[#627382]">Total</p>
                <p className="text-xl font-bold">$999</p>
              </div>
              <div>
                <button onClick={() => setPurchesType([])} className="btn btn-primary btn-block rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                  {" "}
                  Proceed To Checkout
                </button>
              </div>
            </div>
          ) : (
            ""
          )}
        
      </div>
    </div>
  );
};

export default SelectedData;
