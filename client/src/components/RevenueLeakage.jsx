import React from "react";
import PriceFormatter from "../helper/PriceFormatter";

const RevenueLeakage = () => {
  return (
    <div className="w-full font-poppins">
      <div className="flex my-4">
        <div className="w-[33.33%] p-5 bg-green-100 rounded-md">
          <h3 className="text-start text-3xl text-gray-500 font-semibold">0</h3>
          <p className="text-green-500 font-medium text-[15px] text-start">
            Bills Modified
          </p>
        </div>
        <div
          className="w-[33.33%]
        ml-3 bg-red-100 p-5 rounded-md"
        >
          <h3 className="text-start text-3xl text-gray-500 font-semibold">0</h3>
          <p className="text-red-500 font-medium text-[15px] text-start">
            Bills Re-Printed
          </p>
        </div>
        <div
          className="w-[33.33%]
        ml-3 bg-gray-100 p-5 rounded-md"
        >
          <h3 className="text-start text-3xl text-gray-500 font-semibold"> <PriceFormatter price={"40"}/> </h3>
          <p className="text-gray-500 font-medium text-[15px] text-start">
            Waived Off
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="w-[33.33%] rounded-md bg-yellow-100 p-5">
          <h3 className="text-start text-3xl text-gray-500 font-semibold">0 Kots</h3>
          <p className="text-yellow-500 font-medium text-[15px] text-start">
            Cancelled
          </p>
        </div>
        <div className="w-[33.33%] ml-4 rounded-md bg-indigo-100 p-5">
          <h3 className="text-start text-3xl text-gray-500 font-semibold">0</h3>
          <p className="text-indigo-500 font-medium text-[15px] text-start">
            Modified KOTs
          </p>
        </div>
        <div className="w-[33.33%] ml-4 rounded-md bg-pink-100 p-5">
          <h3 className="text-start text-3xl text-gray-500 font-semibold">5 Kots</h3>
          <p className="text-pink-500 font-medium text-[15px] text-start">
            Not Used In Bills
          </p>
        </div>
      </div>
    </div>
  );
};

export default RevenueLeakage;
