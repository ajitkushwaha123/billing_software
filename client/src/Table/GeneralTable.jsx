import React from "react";
import PriceFormatter from "../helper/PriceFormatter";
import { OrderStatus } from "../constants";
import Icon from "../helper/Icon";
import TooltipComponent from "../reuseableComponent/TooltipComponent";
import clsx from "clsx";
import Pagination from "./Pagination";
import { motion } from "motion/react";
import OrderDetails from "../Page/Orders/OrderDetails";

const GeneralTable = ({
  data = [],
  cols = [],
  extraRow = false,
  additionalField = [],
  showMainRows = true,
  showPagination = false,
  showEdit = false,
  showDelete = false,
  showView = false,
  showKot = false,
  statusOptions = [],
  actionsBtn = [],
}) => {
  const totalOrderValue = (items) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalValue = (quantity, price) => quantity * price;

  const findStatus = (status) => {
    const newStatus = statusOptions.find((stat) => stat.key === status);
    console.log("newStatus", newStatus);
    const foundStatus =
      newStatus ||
      OrderStatus.find((orderStatus) => orderStatus.status === status);
    if (!foundStatus) return null;

    return (
      <div
        className={clsx(
          `bg-${foundStatus.color}-100`,
          `text-${foundStatus.color}-500`,
          "rounded-md flex items-center px-3 py-1 text-[12px]"
        )}
      >
        <Icon size="15" name={foundStatus.icon} />
        <span className="ml-1">{foundStatus.title}</span>
      </div>
    );
  };

  const userImage = (name) => {
    const imgText =
      (name?.split(" ")[0]?.charAt(0) || "") +
      (name?.split(" ")[1]?.charAt(0) || "");
    return imgText ? (
      <div className="bg-indigo-500 text-white p-1.5 rounded-md flex justify-center items-center">
        {imgText}
      </div>
    ) : null;
  };

  const renderCellContent = (row, col) => {
    switch (col.key) {
      case "image":
        return row[col.key] ? (
          <img
            src={row[col.key]}
            alt={`${row.name || "user"} image`}
            className="rounded-md w-12 h-12 object-cover"
          />
        ) : (
          userImage(row.name)
        );
      case "amount":
        return (
          <button className="text-indigo-600 hover:text-indigo-900">
            <PriceFormatter price={totalOrderValue(row.items)} />
          </button>
        );
      case "items":
        return <span>{row.items.length}</span>;
      case "status":
        return (
          <div>
            <button className="cursor-pointer">{findStatus(row.status)}</button>
          </div>
          // <TooltipComponent
          //   Button={() => findStatus(row.status)}
          //   Content={() => <OrderStatusOptions />}
          // />
        );
      case "price":
        return (
          <button className="text-indigo-600 hover:text-indigo-900">
            <PriceFormatter price={row.price} />
          </button>
        );
      case "total":
        return (
          <button className="text-indigo-600 hover:text-indigo-900">
            <PriceFormatter price={totalValue(row.quantity, row.price)} />
          </button>
        );
      case "actions":
        return (
          <div className="flex justify-start items-center">
            {actionsBtn.map((btn, index) => {
              return (
                <button
                  key={index}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <TooltipComponent
                    Button={() => btn?.btn || ""}
                    Content={() => (
                      <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                        {btn.title}
                      </div>
                    )}
                  />
                </button>
              );
            })}
            {/* {actionsBtn.map((btn, index) => {
              switch (btn.key) {
                case "delete":
                  return (
                    <div>
                      {showDelete && (
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
                        >
                          <Icon size={18} name={btn.icon} />
                        </motion.button>
                      )}
                    </div>
                  );
                case "edit":
                  return (
                    <button
                      key={index}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      {showEdit && (
                        <TooltipComponent
                          Button={() => (
                            <OrderDetails
                              btn={
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
                                >
                                  <Icon size={18} name={btn.icon} />
                                </motion.button>
                              }
                              title={"Order Details"}
                            />
                          )}
                          Content={() => (
                            <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                              {btn.title}
                            </div>
                          )}
                        />
                      )}
                    </button>
                  );

                case "view":
                  return (
                    <button
                      key={index}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      {showView && (
                        <TooltipComponent
                          Button={() => (
                            <OrderDetails
                              btn={
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
                                >
                                  <Icon size={18} name={btn.icon} />
                                </motion.button>
                              }
                              title={"Order Details"}
                            />
                          )}
                          Content={() => (
                            <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                              {btn.title}
                            </div>
                          )}
                        />
                      )}
                    </button>
                  );

                case "kot":
                  return (
                    <button
                      key={index}
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      {showKot && (
                        <TooltipComponent
                          Button={() => (
                            <OrderDetails
                              btn={
                                <motion.button
                                  whileTap={{ scale: 0.9 }}
                                  className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
                                >
                                  <Icon size={18} name={btn.icon} />
                                </motion.button>
                              }
                              title={"KOT Details"}
                              kot={true}
                            />
                          )}
                          Content={() => (
                            <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
                              {btn.title}
                            </div>
                          )}
                        />
                      )}
                    </button>
                  );
              }

              // <div>
              //   {btn.key === "delete" ? (
              //     <div>
              //       {showDelete && (
              //         <motion.button
              //           whileTap={{ scale: 0.9 }}
              //           className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
              //         >
              //           <Icon size={18} name={btn.icon} />
              //         </motion.button>
              //       )}
              //     </div>
              //   ) : (
              //     <button
              //       key={index}
              //       className="text-indigo-600 hover:text-indigo-900"
              //     >
              // <TooltipComponent
              //   Button={() => (
              //     <OrderDetails
              //       btn={
              //         <motion.button
              //           whileTap={{ scale: 0.9 }}
              //           className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
              //         >
              //           <Icon size={18} name={btn.icon} />
              //         </motion.button>
              //       }
              //       title={"Order Details"}
              //     />
              //   )}
              //   Content={() => (
              //     <div className="bg-white text-primary  rounded-lg relative shadow-lg shadow-indigo-500/40 py-2 px-3">
              //       {btn.title}
              //     </div>
              //   )}
              // />
              //     </button>
              //   )}
              // </div>
            })} */}
          </div>
        );

      default:
        return row[col.key] || null;
    }
  };

  const renderExtraCells = (row) => (
    <div className="flex justify-between items-center">
      <span>{row.title}</span>
      {row.type === "price" ? (
        <span
          className={clsx(
            "px-10",
            row.key === "total" && "font-semibold text-primary"
          )}
        >
          <PriceFormatter price={row.value} />
        </span>
      ) : (
        <span className="px-10">{row.value}</span>
      )}
    </div>
  );

  return (
    <div className="flex flex-col">
      <div className="align-middle overflow-x-scroll min-w-full chalaja inline-block">
        <div className="shadow border-b border-gray-200 sm:rounded-lg">
          {showMainRows && (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {cols.map((col, index) => (
                    <th
                      key={`header-${index}`}
                      scope="col"
                      className={`py-3 px-5 text-left whitespace-nowrap text-xs font-medium text-gray-500 uppercase tracking-wider ${
                        col.title ? "" : "hidden"
                      }`}
                    >
                      {col.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={`row-${rowIndex}`}
                    className={clsx(
                      row.key === "total" ? "bg-secondary" : "",
                      rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                    )}
                  >
                    {cols.map((col, colIndex) => (
                      <td
                        key={`cell-${rowIndex}-${colIndex}`}
                        className="py-4 px-4 text-start whitespace-nowrap text-sm text-gray-500"
                      >
                         {renderCellContent(row, col)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {extraRow && (
            <table className="min-w-full">
              <tbody>
                {additionalField.map((row, rowIndex) => (
                  <tr
                    key={`extra-row-${rowIndex}`}
                    className={clsx(
                      row.key === "total" ? "bg-secondary" : "",
                      rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"
                    )}
                  >
                    <td className="py-4 px-4 text-start w-full whitespace-nowrap text-sm text-gray-500">
                      {renderExtraCells(row)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {showPagination && (
        <div>
          <Pagination length={data?.length} />
        </div>
      )}
    </div>
  );
};

export default GeneralTable;
