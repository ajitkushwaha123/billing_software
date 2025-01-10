import React from "react";
import { OrderStatus } from "../../constants";
import { clsx } from "clsx";
import Icon from "../../helper/Icon";
import PriceFormatter from "../../helper/PriceFormatter";
import OrderDetails from "./OrderDetails";

const OrderComponent = ({ kot=false }) => {
  const findStatus = (status) => {
    const foundStatus = OrderStatus.find(
      (orderStatus) => orderStatus.status === status
    );
    if (!foundStatus) return null;
    return (
      <div className="flex justify-center items-center text-[12px] px-3 py-1">
        <div
          className={clsx(
            `bg-${foundStatus.color}-100`,
            `text-${foundStatus.color}-500`,
            "rounded-md flex items-center px-3 py-1"
          )}
        >
          <Icon size="15" name={foundStatus.icon} />
          <span className="ml-1">{foundStatus.title}</span>
        </div>
      </div>
    );
  };

  const userImage = (name) => {
    const imgText =
      (name?.split(" ")[0]?.charAt(0) || "") +
      (name?.split(" ")[1]?.charAt(0) || "");
    return imgText ? (
      <div className="bg-indigo-500 text-xl text-white p-1.5 rounded-md flex justify-center items-center">
        {imgText}
      </div>
    ) : null;
  };

  return (
    <div className="bg-white pt-4 px-4 py-2 font-poppins shadow-md rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <div>{userImage("Ariel Hikmat")}</div>
          <div className="text-start mx-3">
            <h3 className="font-semibold text-gray-600">Ariel Hikmat</h3>
            <p className="text-[12px] text-gray-400"> Order #123 / Dine In</p>
          </div>
        </div>

        <div>
          <button> {findStatus("pending")} </button>
        </div>
      </div>

      <div className="flex border-b-[1px] pb-3 text-gray-400 justify-between items-center mt-3">
        <p>July 12, 2023</p>
        <p>06:12PM</p>
      </div>

      <div className="flex justify-between items-center pt-3">
        <span className="text-gray-800">Total</span>
        <p className="font-bold text-gray-600">
          <PriceFormatter price={"628"} />
        </p>
      </div>

      <div className="flex justify-evenly items-center py-3">
        <div className="w-[50%] border-2 border-primary rounded-md flex text-primary justify-center py-2 items-center">
          <OrderDetails
            btn={<button> {kot ? "KOT Details" : "See Details"} </button>}
            title={kot ? "KOT Details" : "Order Details"}
            kot={kot}
          />
        </div>

        <button className="w-[50%] bg-primary border-2 border-primary rounded-md text-white py-2 flex justify-center items-center ml-3">
          {kot ? "Print KOT" : "Print Bill"}
        </button>
      </div>
    </div>
  );
};

export default OrderComponent;
