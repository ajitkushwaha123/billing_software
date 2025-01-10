import React from "react";

const OrderStatstics = () => {
  return (
    <div className="w-full font-poppins">
      <div className="flex my-4">
        <div className="w-[50%] p-3 bg-green-100 rounded-md">
          <h3 className="text-start text-xl font-semibold">17</h3>
          <p className="text-green-500 font-medium text-[14px] text-start">
            Success 
          </p>
        </div>
        <div
          className="w-[50%]
        ml-4 bg-red-100 p-3 rounded-md"
        >
          <h3 className="text-start text-xl font-semibold">0</h3>
          <p className="text-red-500 font-medium text-[14px] text-start">
            Cancelled 
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="w-[50%] rounded-md bg-gray-100 p-3">
          <h3 className="text-start text-xl font-semibold">2</h3>
          <p className="text-gray-500 font-medium text-[14px] text-start">
            Complimentary 
          </p>
        </div>
        <div className="w-[50%] ml-4 rounded-md bg-purple-100 p-3">
          <h3 className="text-start text-xl font-semibold">2.5 mins</h3>
          <p className="text-purple-500 font-medium text-[14px] text-start">
            Avg. Table Time
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderStatstics;
