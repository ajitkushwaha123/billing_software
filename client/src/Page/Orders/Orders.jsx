import React, { useState } from "react";
import OrderComponent from "./OrderComponent";
import Filter from "../../components/Filter";
import OrdersListView from "./OrdersListView";
import { OrderStatus } from "../../constants";

const searchType = [
  {
    name: "Order ID",
    placeholder: "#123456",
    type: "number",
  },
  {
    name: "Customer Name",
    placeholder: "John Doe",
    type: "text",
  },
  {
    name: "Phone Number",
    placeholder: "9876543210",
    type: "number",
  },
];

const Orders = () => {
  const [gridView, setGridView] = useState(false);

  return (
    <div className="flex">
      <div className="flex-1 m-5">
        <Filter
          title={"All Orders"}
          OrderStatus={OrderStatus}
          searchType={searchType}
          onChangeView={(val) => setGridView(val)}
        />

        {gridView ? (
          <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
            <OrderComponent />
          </div>
        ) : (
          <div className="overflow-x-scroll">
            <OrdersListView />
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
