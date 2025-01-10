import React from "react";
import GeneralTable from "../../Table/GeneralTable";
import PriceFormatter from "../../helper/PriceFormatter";

const cols = {
  items: [
    { title: "Item Name", uid: "name", key: "name" },
    { title: "Special Note", uid: "special_note", key: "special_note" },
    { title: "Quantity", uid: "quantity", key: "quantity" },
    { title: "Unit Price", uid: "price", key: "price" },
    { title: "Total", uid: "total", key: "total" },
  ],
  kot: [
    { title: "Item Name", uid: "name", key: "name" },
    { title: "Special Note", uid: "special_note", key: "special_note" },
    { title: "Quantity", uid: "quantity", key: "quantity" },
  ],
};

const details = {
  data: [
    { title: "Order Number", key: "order_number" },
    { title: "Billing User", key: "billing_user" },
    { title: "Customer Name", key: "customer_name" },
    { title: "Customer Phone", key: "customer_phone" },
    { title: "Customer Address", key: "customer_address" },
    { title: "No. of Person", key: "no_of_person" },
    { title: "Order Type", key: "order_type" },
    { title: "Assign To", key: "assign_to" },
    { title: "Total Tax", key: "total_tax", type: "money" },
    { title: "Total Discount", key: "total_discount", type: "money" },
    { title: "Total Amount", key: "total_amount", type: "money" },
    { title: "Settlement Amount", key: "settlement_amount", type: "money" },
    { title: "Order Status", key: "order_status" },
    { title: "Printed", key: "printed" },
    { title: "Tip", key: "tip", type: "money" },
    { title: "Sub Order Type", key: "sub_order_type" },
    { title: "Sequence Number", key: "sequence_number" },
    { title: "Settlement Counter", key: "settlement_counter" },
    { title: "Settled By", key: "settled_by" },
    { title: "Settled At", key: "settled_at" },
    { title: "Created At", key: "created_at" },
    { title: "Updated At", key: "updated_at" },
    { title: "Payment Mode", key: "payment_mode" },
    { title: "Payment Type Reason", key: "payment_type_reason" },
  ],
  kotData: [
    { title: "KOT ID", key: "kot_id" },
    { title: "Billing User", key: "billing_user" },
    { title: "Customer Name", key: "customer_name" },
    { title: "Customer Phone", key: "customer_phone" },
    { title: "Customer Address", key: "customer_address" },
    { title: "No. of Person", key: "no_of_person" },
    { title: "Order Type", key: "order_type" },
    { title: "Assign To", key: "assign_to" },
  ],
};

const TableBody = ({ rows, orderDetails }) => (
  <tbody className="grid grid-cols-2">
    {rows?.map((row, rowIndex) => (
      <tr
        key={`row-${rowIndex}`}
        className={`${
          row?.key === "total"
            ? "bg-secondary"
            : Math.floor((rowIndex + 1) / 2) % 2 === 0
            ? "bg-white"
            : "bg-gray-50"
        } w-full flex justify-between items-center`}
      >
        <td className="py-4 px-4 text-start w-full whitespace-nowrap text-sm text-gray-500">
          <div className="flex justify-between items-center w-full">
            <span className="font-semibold w-[35%]">{row.title}</span>
            <span className="px-10 w-[65%] text-start">
              {row?.type === "money" ? (
                <PriceFormatter price={orderDetails[row.key]} />
              ) : (
                orderDetails[row.key]
              )}
            </span>
          </div>
        </td>
      </tr>
    ))}
  </tbody>
);

const OrderDetailComponent = ({ orderDetails, kot = false }) => (
  <div>
    <table className="w-full">
      <TableBody
        rows={kot ? details.kotData : details.data}
        orderDetails={orderDetails}
      />
    </table>

    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        Items Details
      </h3>
    </div>

    <GeneralTable
      cols={kot ? cols.kot : cols.items}
      data={orderDetails.order_items}
      extraRow={!kot}
      additionalField={orderDetails.additionalInfo}
    />
  </div>
);

export default OrderDetailComponent;
