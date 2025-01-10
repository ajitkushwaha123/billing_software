import React, { useEffect } from "react";
import { cols } from "../../constants";
import GeneralTable from "../../Table/GeneralTable";

const RecentOrders = ({ Orders }) => {
  return (
    <div>
      <GeneralTable data={Orders} cols={cols}/>
    </div>
  );
};

export default RecentOrders;
