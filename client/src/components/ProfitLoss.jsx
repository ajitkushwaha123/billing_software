import React from "react";
import PriceFormatter from "../helper/PriceFormatter";
import Icon from "../helper/Icon";

const ProfitLoss = ({ revenue, expense }) => {
  return (
    <div>
      <div className="my-5 flex justify-evenly items-center">
        <div className="bg-purple-100 rounded-md w-[45%] p-3 flex flex-col justify-start items-center">
          <p className="py-2 text-start">Revenue</p>
          <p className="w-full py-2 mx-5 bg-white rounded-md text-purple-400">
            <PriceFormatter price={revenue} />
          </p>
        </div>

        <div className="text-gray-600">
          <Icon name="CircleMinus" />
        </div>

        <div className="bg-red-100 rounded-md w-[45%] p-3 flex flex-col justify-start items-center">
          <p className="py-2 text-start">Expense</p>
          <p className="w-full py-2 mx-5 bg-white rounded-md text-red-400">
            <PriceFormatter price={expense} />
          </p>
        </div>
      </div>
      <div className="mt-5 flex w-full">
        <div
          className={`${
            revenue - expense >= 0 ? "bg-green-100" : "bg-red-100"
          } rounded-md w-full p-3 flex flex-col justify-start items-center`}
        >
          <p className="py-2 text-start">Net Cash Profit / Loss</p>
          <p
            className={`w-full py-2 mx-5 bg-white ${
              revenue - expense >= 0 ? "text-green-400" : "text-red-400"
            } rounded-md`}
          >
            <PriceFormatter price={revenue - expense} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;
