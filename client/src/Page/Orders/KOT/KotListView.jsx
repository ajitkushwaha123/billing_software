import React from "react";
import GeneralTable from "../../../Table/GeneralTable";
import { kotCols, ordersData } from "../../../constants";
import OrderDetails from "../../../Page/Orders/OrderDetails";
import { motion } from "framer-motion";
import Icon from "../../../helper/Icon";
import OrderDetailComponent from "../../../Page/Orders/OrderDetailComponent";
import { orderDetails } from "../../../constants";

const actionsBtn = [
  {
    title: "Delete",
    icon: "Trash2",
    key: "delete",
    btn: (
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
      >
        <Icon size={18} name={"Trash2"} />
      </motion.button>
    ),
  },
  {
    title: "KOT",
    icon: "ReceiptText",
    key: "kot",
    btn: (
      <OrderDetails
        btn={
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
          >
            <Icon size={18} name={"ReceiptText"} />
          </motion.button>
        }
        title={"Order Details"}
      >
        <OrderDetailComponent kot={true} orderDetails={orderDetails} />
      </OrderDetails>
    ),
  },
  {
    title: "View",
    icon: "Eye",
    key: "view",
    btn: (
      <OrderDetails
        btn={
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
          >
            <Icon size={18} name={"Eye"} />
          </motion.button>
        }
        title={"Order Details"}
      >
        <OrderDetailComponent kot={false} orderDetails={orderDetails} />
      </OrderDetails>
    ),
  },
];

const KotListView = () => {
  return (
    <div className="chalaja w-[full] overflow-x-scroll">
      <GeneralTable
        actionsBtn={actionsBtn}
        showView={true}
        showKot={true}
        data={ordersData}
        showPagination={true}
        cols={kotCols}
      />
    </div>
  );
};

export default KotListView;
