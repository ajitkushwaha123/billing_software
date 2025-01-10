import React from "react";
import GeneralTable from "../../Table/GeneralTable";
import { orderCols, ordersData, orderDetails } from "../../constants";
import OrderDetails from "../../Page/Orders/OrderDetails";
import { motion } from "framer-motion";
import Icon from "../../helper/Icon";
import OrderDetailComponent from "../../Page/Orders/OrderDetailComponent";

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
    title: "Edit",
    icon: "Pencil",
    key: "edit",
    btn: (
      <OrderDetails
        btn={
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
          >
            <Icon size={18} name={"Pencil"} />
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

const OrdersListView = () => {
  return (
    <div className="my-5 w-full overflow-x-scroll">
      <GeneralTable
        showDelete={true}
        showEdit={true}
        showView={true}
        data={ordersData}
        showPagination={true}
        cols={orderCols}
        actionsBtn={actionsBtn}
      />
    </div>
  );
};

export default OrdersListView;
