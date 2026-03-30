import React from "react";
import EmptySelectedData from "./EmptySelectedData/EmptySelectedData";
import AddSelectdData from "./AddSelectdData/AddSelectdData";
import { FaShoppingCart } from "react-icons/fa";

const SelectedData = ({ purchesType, setPurchesType }) => {
  console.log(purchesType);
  return (
    <div>
          <div className="card w-96 bg-base-300 shadow-lg"></div>
          <p className="text-xl font-bold">Your Cart</p>
          {
              purchesType.length === 0 ? 
                  <div className="flex justify-center items-center flex-col">
                      <FaShoppingCart></FaShoppingCart>
                      <p>Your Cart is empty</p>
                  </div> 
                  :
                  <div></div>
          }
    </div>
  );
};

export default SelectedData;
