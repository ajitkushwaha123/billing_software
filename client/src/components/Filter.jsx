import React, { useState } from "react";
import SidebarModal from "../Modals/SidebarModal";
import Icon from "../helper/Icon";
import DropDown from "../components/Dropdown";
import TooltipComponent from "../reuseableComponent/TooltipComponent";
import { motion } from "motion/react";

const Filter = ({ onChangeView, searchType = [], OrderStatus = [] , title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [gridView, setGridView] = useState(false);
  console.log(isOpen);

  const handleViewChnage = () => {
    setGridView(!gridView);
    onChangeView(!gridView);
  };

  const orderType = [
    { title: "All", value: "All" },
    { title: "DINE-IN", value: "DINE-IN" },
    { title: "TAKEAWAY", value: "TAKEAWAY" },
    { title: "DELIVERY", value: "DELIVERY" },
  ];
  const paymentType = [
    { title: "CASH", value: "CASH" },
    { title: "CARD", value: "CARD" },
    { title: "DUE", value: "DUE" },
    { title: "OTHER", value: "OTHER" },
    { title: "WALLET", value: "WALLET" },
    { title: "UPI", value: "UPI" },
    { title: "ONLINE", value: "ONLINE" },
  ];

  const gstIn = [
    { title: "All", value: "all" },
    { title: "WITH GST", value: "with-gst" },
    { title: "WITHOUT GST", value: "without-gst" },
  ];

  const RenderFilterOptions = ({ options, title }) => (
    <div>
      <span className="justify-start flex w-full pt-4 px-4">{title}</span>
      <div className="p-4 flex chalaja w-auto gap-4 overflow-x-scroll">
        {options.map((type, index) => (
          <div key={index} className="flex">
            <label className="flex border-[1px] border-primary justify-center px-3 py-2 rounded-full items-center space-x-3">
              <input
                type="checkbox"
                className="rounded-full outline-none text-blue-500"
              />
              <span className="text-gray-900 whitespace-nowrap">
                {type.title}
              </span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  const exportOptions = [
    {
      title: "Export Current Page",
      icon: "ImageDown",
    },
    {
      title: "Export All Page",
      icon: "ScreenShare",
    },
  ];

  return (
    <div className="bg-white w-[100%] rounded-md">
      <div className="px-5 py-4 flex justify-between items-center">
        <p className="text-[20px] font-medium"> {title} </p>

        <div className="flex items-center justify-center">
          <TooltipComponent
            Button={() => (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="hover:bg-gray-100 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
                onClick={() => handleViewChnage()}
              >
                {!gridView ? (
                  <Icon name={"LayoutGrid"} size={20} />
                ) : (
                  <Icon name={"List"} size={20} />
                )}
              </motion.button>
            )}
            Content={() => (
              <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                Change Layout
              </div>
            )}
          />

          <TooltipComponent
            Button={() => (
              <button className="mx-2">
                <DropDown title={"Export Excel"} menuOptions={exportOptions} />
              </button>
            )}
            Content={() => (
              <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                Export
              </div>
            )}
          />

          <div>
            <SidebarModal
              btn={
                <TooltipComponent
                  Button={() => (
                    <button
                      className="hover:bg-gray-100 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <Icon size={20} name="SlidersHorizontal" />
                    </button>
                  )}
                  Content={() => (
                    <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                      Apply Filter
                    </div>
                  )}
                />
              }
              open={isOpen}
              component={
                <div>
                  <div className="overflow-y-auto fixed bottom-0 flex justify-end overflow-x-hidden shadow-lg shadow-indigo-500/40 backdrop-blur-sm bg-indigo-500/5 z-50 items-center w-full md:inset-0 h-full">
                    <div className="relative p-2 w-full max-w-xl h-full">
                      <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: "0%", opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{
                          duration: 1,
                          type: "spring",
                          bounce: 0.25,
                        }}
                        className="relative bg-white chalaja overflow-y-scroll h-full rounded-lg shadow-lg dark:bg-gray-700"
                      >
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Apply Filter
                          </h3>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
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
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">Close modal</span>
                          </motion.button>
                        </div>
                        <div>
                          <RenderFilterOptions
                            title={"Select Order Type"}
                            options={orderType}
                          />
                        </div>

                        {searchType.map((type, index) => (
                          <div key={index}>
                            <span className="justify-start flex w-full pt-4 px-4">
                              {type.name}
                            </span>
                            <div className="px-4 py-2 sm:pr-28">
                              <div className="mt-1">
                                <input
                                  type={type.type}
                                  name="orderId"
                                  className="shadow-sm focus:ring-indigo-500 py-2 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                  placeholder={type.placeholder}
                                />
                              </div>
                            </div>
                          </div>
                        ))}

                        <RenderFilterOptions
                          title={"Select Payment Type"}
                          options={paymentType}
                        />
                        <RenderFilterOptions
                          title={"Select Order Status"}
                          options={OrderStatus}
                        />

                        <div className="pb-[70px]">
                          <RenderFilterOptions
                            title={"GSTIN"}
                            options={gstIn}
                          />
                        </div>

                        <div className="flex bg-white w-full fixed bottom-0 items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                          <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Search
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          >
                            Cancel
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
