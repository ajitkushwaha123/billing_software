import React , { useState } from "react";
import GeneralTable from "../../Table/GeneralTable";
import TabBlock from "../../components/OrderComponents/TabBlock";
import { motion } from "framer-motion";
import Icon from "../../helper/Icon";

const billerCols = [
  { title: "Biller Name", key: "name", uid: "name" },
  { title: "User Name", key: "username", uid: "username" },
  { title: "User Code", key: "userCode", uid: "userCode" },
  { title: "Status", key: "status", uid: "status" },
  { title: "User Rights", key: "userRights", uid: "userRights" },
  { title: "Action", key: "actions", uid: "actions" },
];

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
    title: "View",
    icon: "ReceiptText",
    key: "view",
    btn: (
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="hover:bg-gray-100 mx-1 border-[1px] border-gray-300 px-2 py-1.5 text-gray-500 hover:text-gray-800 rounded-md"
      >
        <Icon size={18} name={"ReceiptText"} />
      </motion.button>
    ),
  },
];

const billerData = [
  {
    name: "ABC Telecom",
    username: "john_doe",
    userCode: "JD123",
    status: "active",
    userRights: "Admin",
  },
  {
    name: "XYZ Utilities",
    username: "jane_smith",
    userCode: "JS456",
    status: "inactive",
    userRights: "User",
  },
  {
    name: "Mega Bank",
    username: "alex_brown",
    userCode: "AB789",
    status: "active",
    userRights: "Manager",
  },
  {
    name: "Global Insurance",
    username: "emma_white",
    userCode: "EW321",
    status: "pending",
    userRights: "Admin",
  },
  {
    name: "Green Energy",
    username: "charlie_black",
    userCode: "CB654",
    status: "inactive",
    userRights: "User",
  },
];

const statusOptions = [
    { title: "Active", key : "active" , color : "green" },
    { title: "Inactive", key : "inactive" , color : "red" },
    { title: "Pending", key : "pending" , color : "yellow" },
]


const tab1 = [
  {
    title: "Biller",
    content: (
      <GeneralTable
        cols={billerCols}
        data={billerData}
        statusOptions={statusOptions}
        actionsBtn={actionsBtn}
      />
    ),
  },
    {
      title: "Captain",
    //   content: (
    //     <RecentOrders Orders={filterOrders(Orders, paymentPendingStatus)} />
    //   ),
    },
    {
      title: "Delivery Boy",
    //   content: <RecentOrders Orders={filterOrders(Orders, completedStatus)} />,
    },
    {
      title: "Waiter",
    //   content: <RecentOrders Orders={filterOrders(Orders, completedStatus)} />,
    },
    {
      title: "Order Acceptance App",
    //   content: <RecentOrders Orders={filterOrders(Orders, completedStatus)} />,
    },
];

const Staff = () => {
  return (
    <div>
      <div className="my-5 mx-5">
        <TabBlock tabs={tab1} showBtn={true} />
      </div>
    </div>
  );
};

export default Staff;