import React from "react";
import PriceFormatter from "../helper/PriceFormatter";

const Taxes = [
  { taxName: "Income Tax", amountEarned: 500000 },
  { taxName: "Sales Tax", amountEarned: 350000 },
  { taxName: "Property Tax", amountEarned: 200000 },
  { taxName: "Corporate Tax", amountEarned: 800000 },
  { taxName: "Excise Tax", amountEarned: 150000 },
  { taxName: "Customs Duty", amountEarned: 100000 },
];

const taxCol = [
  {
    title: "Taxes Name",
    uid: "name",
  },
  {
    title: "Amount",
    uid: "price",
  },
];

const TaxesData = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Taxes Name
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {Taxes.map((taxes, taxId) => (
                  <tr
                    key={taxes.email}
                    className={taxId % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 text-start py-4 whitespace-nowrap text-sm text-gray-500">
                      {taxes.taxName}
                    </td>
                    <td className="px-6 text-start py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        <PriceFormatter price={"200"} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxesData;
