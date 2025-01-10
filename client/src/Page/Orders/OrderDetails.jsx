import React, { useState } from "react";
import SidebarModal from "../../Modals/SidebarModal";
import OrderDetailComponent from "./OrderDetailComponent";
import { orderDetails } from "../../constants";
import { motion } from "framer-motion";

const OrderDetails = ({ btn, title, kot = false, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <div className="bg-white rounded-md">
      <div className="flex justify-between items-center">
        <SidebarModal
          btn={
            <span
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {btn}
            </span>
          }
          open={isOpen}
          component={
            <div className="overflow-y-auto fixed bottom-0 flex justify-end overflow-x-hidden shadow-lg shadow-indigo-500/40 backdrop-blur-sm bg-indigo-500/5 z-50 items-center w-full md:inset-0 h-full">
              <div className="relative p-2 w-full max-w-3xl h-full">
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{
                    duration: 1,
                    type: "spring",
                    bounce: 0.25,
                  }}
                  className="relative bg-white overflow-x-hidden overflow-y-scroll h-full rounded-lg shadow-lg dark:bg-gray-700"
                >
                  <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {title} 
                      {/* /{" "}
                      <span className="text-gray-500">
                        {kot ? orderDetails.kot_id : orderDetails.order_number}
                      </span> */}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {children}
                </motion.div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default OrderDetails;
