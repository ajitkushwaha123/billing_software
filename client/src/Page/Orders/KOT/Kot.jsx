import React, { useState } from "react";
import Filter from "../../../components/Filter";
import KotListView from "./KotListView";
import OrderComponent from "../OrderComponent";

const searchType = [
  {
    name: "KOT Number",
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
  {
    name: "Table Number",
    placeholder: "T1 H1",
    type: "text",
  },
];

const status = [
  { title: "All", value: "all" },
  { title: "Active", value: "active" },
  { title: "Used In Bill", value: "used_in_bill" },
  { title: "Cancelled", value: "cancelled" },
];

const Kot = () => {
  const [gridView, setGridView] = useState(false);

  return (
    <div className="m-5">
      <Filter
        OrderStatus={status}
        searchType={searchType}
        onChangeView={(val) => setGridView(val)}
        title="KOT"
      />

      {gridView ? (
        <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <OrderComponent kot={true} />
          <OrderComponent kot={true} />
          <OrderComponent kot={true} />
          <OrderComponent kot={true} />
          <OrderComponent kot={true} />
          <OrderComponent kot={true} />
          <OrderComponent kot={true} />
          <OrderComponent kot={true} />
        </div>
      ) : (
        <div className="overflow-x-scroll my-5">
          <KotListView />
        </div>
      )}
    </div>
  );
};

export default Kot;
