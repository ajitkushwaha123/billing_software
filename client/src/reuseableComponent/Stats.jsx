import Icon from "../helper/Icon";
import React from "react";
import PriceFormatter from "../helper/PriceFormatter";
import OnClickComponent from "./OnClickComponent";
import TooltipComponent from "./TooltipComponent";
import GeneralTable from "../Table/GeneralTable";
import { motion } from "framer-motion";

const Stats = ({ data, detailedData }) => {
  console.log("detailedData", detailedData);
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className={`bg-${data.bgColor}-100 p-2 rounded-lg`}>
            <Icon className="text-[#525252]" name={data.icon} />
          </div>
          <p className="ml-3 text-[#383838]">{data.title}</p>
        </div>

        <OnClickComponent
          data={
            <GeneralTable
              data={detailedData.orderData}
              cols={detailedData.cols}
            />
          }
          btn={
            <TooltipComponent
              Button={() => (
                <motion.div whileTap={{ scale: 0.9 }}>
                  <Icon name="EllipsisVertical" />
                </motion.div>
              )}
              Content={() => (
                <div className="bg-white text-primary min-w-[102px] rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                  View Detail
                </div>
              )}
            />
          }
        />
      </div>

      <div className="flex mt-5 justify-between items-center">
        <div>
          <h3 className="text-xl text-start font-semibold text-[#3d3d3d]">
            <PriceFormatter price={data.amount} />
          </h3>
          <p className="text-gray-400 text-sm">From last month</p>
        </div>
        <div>
          <motion.p
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className={`flex justify-center px-2 py-1 rounded-full ${
              data.percentage >= 0
                ? "text-green-500 bg-green-100"
                : "text-red-500 bg-red-100"
            } items-center`}
          >
            <Icon
              name={data.percentage >= 0 ? "ArrowUp" : "ArrowDown"}
              size={"16"}
            />
            <span className="ml-1">{Math.abs(data.percentage)} %</span>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
