import React from "react";
import OrderChart from "../../Charts/OrderChart";
import Block from "../../reuseableComponent/Block";
import ProfitLoss from "../../components/ProfitLoss";
import OrderStatstics from "../../components/OrderStatstics";
import {
  statsData,
  restaurantItems,
  Orders,
  processingStatus,
  paymentPendingStatus,
  completedStatus,
  mostAndLeastSellingCols,
  weeklyOrdersData,
  dailyOrdersData,
  dailySalesData,
  weeklySalesData,
  taxCol,
  taxes,
} from "../../constants";
import Stats from "../../reuseableComponent/Stats";
import SalesMethodChart from "../../components/SalesMethodChart";
import OrderTypeChart from "../../Charts/OrderTypeChart";
import RevenueLeakage from "../../components/RevenueLeakage";
import TabBlock from "../../components/OrderComponents/TabBlock";
import GeneralTable from "../../Table/GeneralTable";
import { filterOrders } from "../../helper/OrdersFilter";
import RecentOrders from "../../components/OrderComponents/RecentOrders";

const Dashboard = () => {
  const mostSellingItems = restaurantItems.sort((a, b) => b.orders - a.orders);

  const tab1 = [
    {
      title: "In Progress",
      content: <RecentOrders Orders={filterOrders(Orders, processingStatus)} />,
    },
    {
      title: "Pending Payment",
      content: (
        <RecentOrders Orders={filterOrders(Orders, paymentPendingStatus)} />
      ),
    },
    {
      title: "Completed",
      content: <RecentOrders Orders={filterOrders(Orders, completedStatus)} />,
    },
  ];
  const tab2 = [
    {
      title: "Most Selling",
      content: (
        <GeneralTable data={mostSellingItems} cols={mostAndLeastSellingCols} />
      ),
    },
    {
      title: "Least Selling",
      content: (
        <GeneralTable data={mostSellingItems} cols={mostAndLeastSellingCols} />
      ),
    },
  ];
  return (
    <div className="w-[100%]">
      {/* <Dummy /> */}
      <div className="flex my-5 items-center">
        {statsData.map((data, index) => {
          return (
            <div
              className={`${index === 0 ? "mx-5" : "mr-5"} 
                w-[25%]`}
            >
              <Stats key={index} data={data} detailedData={data.detailedData} />
            </div>
          );
        })}
      </div>

      <div className="w-[100%] flex">
        <div className="w-[65%]">
          <div className="mb-5 mx-5">
            <Block title="Total Orders" className="p-5" date="12 DEC">
              <div className="mt-5">
                <OrderChart weekly={weeklyOrdersData} daily={dailyOrdersData} />
              </div>
            </Block>
          </div>

          <div className="mb-5 mx-5">
            <Block title="Total Sales" date="12 DEC">
              <div className="flex justify-center items-center">
                <SalesMethodChart />
              </div>
            </Block>
          </div>

          <div className="mb-5 mx-5">
            <Block title="Revenue Leakage" date="12 DEC">
              <RevenueLeakage />
            </Block>
          </div>

          <div className="mb-5 mx-5">
            <Block title="Total Orders" className="p-5" date="12 DEC">
              <div className="mt-5">
                <OrderChart
                  weely={weeklySalesData}
                  daily={dailySalesData}
                  filterType="daily"
                />
              </div>
            </Block>
          </div>

          <div className="mb-5 mx-5">
            <TabBlock tabs={tab1} />
          </div>
        </div>
        <div className="w-[35%]">
          <div className="mb-5 mr-5 ">
            <Block title="Profit And Loss" date="12 DEC">
              <ProfitLoss revenue={"12628"} expense={"2000"} />
            </Block>
          </div>

          <div className="my-5 mr-5">
            <Block title="Order Statistics" date="12 DEC">
              <OrderStatstics />
            </Block>
          </div>

          <div className="my-5 mr-5">
            <Block title="Total Orders" className="p-5" date="12 DEC">
              <OrderTypeChart />
            </Block>
          </div>

          <div className="my-5 mr-5">
            <Block title="Taxes" date="12 DEC">
              <div className="my-2.5">
                <GeneralTable data={taxes} cols={taxCol} />
              </div>
            </Block>
          </div>

          <div className="my-5 mr-5">
            <TabBlock tabs={tab2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
