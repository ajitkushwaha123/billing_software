import React from "react";
import Icon from "../helper/Icon";
import TooltipComponent from "./TooltipComponent";
import Notification from "./Notification";
import { motion } from "motion/react";
import Btn from "./Buttons/Btn";

const Block = ({ children, title, date }) => {
  return (
    <div className="p-4 bg-white rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-800 font-medium"> {title} </h3>
        <div className="flex justify-center items-center">
          <TooltipComponent
            Button={() => (
              <motion.p
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-gray-100 hover:text-black cursor-pointer rounded-md border-[1px] border-[#8b8b8b]"
              >
                <Icon size={"20"} name={"ExternalLink"} />
              </motion.p>
            )}
            Content={() => (
              <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                View Detail
              </div>
            )}
          />
          <TooltipComponent
            Button={() => (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="flex cursor-pointer mx-3 px-2 py-2 rounded-md border-[1px] border-[#8b8b8b] justify-center items-center"
              >
                <Icon size={"20"} name={"CalendarRange"} />
                <span className="ml-2 text-sm"> {date} </span>
              </motion.button>
            )}
            Content={() => (
              <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                Change Date
              </div>
            )}
          />

          <TooltipComponent
            Button={() => (
              <motion.p
                whileTap={{ scale: 0.9 }}
                className="p-2 cursor-pointer rounded-md border-[1px] border-[#8b8b8b]"
              >
                <Icon size={"20"} name={"RefreshCw"} />
              </motion.p>
            )}
            Content={() => (
              <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                Refresh
              </div>
            )}
          />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Block;
