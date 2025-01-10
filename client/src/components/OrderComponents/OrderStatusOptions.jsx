import React from "react";
import { Orders, OrderStatus } from "../../constants";
import Icon from "../../helper/Icon";

export default function OrderStatusOptions() {
  return (
    <div>
      <div className="bg-white rounded-lg relative shadow-md shadow-indigo-500/40 text-[#303030] py-4 m-0 overflow-y-scroll chalaja h-[300px] font-poppins w-[150px]">
        <div className="flex flex-col">
          {OrderStatus.map((status, index) => {
            return (
              <div key={index} className="flex my-0.5">
                <div
                  className={`flex justify-center text-[12px] px-3 py-1 items-center`}
                >
                  <div
                    className={`bg-${status.color}-100 text-${status.color}-500 rounded-md flex justify-center text-[12px] px-3 py-1 items-center`}
                  >
                    <Icon size={"15"} name={status.icon} />
                    <span className="ml-1">{status.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
