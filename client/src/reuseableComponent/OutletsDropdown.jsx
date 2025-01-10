import { useState } from "react";
import Icon from "../helper/Icon";

const OutletsDropdown = ({ restaurantOutlets }) => {
  const [selectedOutlet, setSelectedOutlet] = useState(null);
  const [showOptions, setShowOptions] = useState(false);

  const handleSelect = (outlet) => {
    setSelectedOutlet(outlet);
    setShowOptions(false);
  };

  return (
    <div className="relative m-4">
      <button onClick={() => {setShowOptions(!showOptions)}} className="flex w-full justify-between items-center border-2 rounded-lg p-3">
        <div className="flex flex-col justify-start text-start items-start">
          <h3 className="text-lg w-[130px] truncate uppercase font-semibold">
            {selectedOutlet?.name || "Select Outlet"}
          </h3>
          <p className="text-sm w-[130px] truncate text-start font-medium">
            {selectedOutlet?.location || "Select Location"}
          </p>
        </div>
        <div>
          <Icon name={"ChevronsUpDown"} className="ml-5" />
        </div>
      </button>

      {showOptions && (
        <div className="absolute w-full mt-1 bg-white border-2 rounded-lg max-h-60 chalaja overflow-auto">
          {restaurantOutlets.map((outlet, index) => (
            <div
              key={index}
              className="p-3 text-start cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelect(outlet)}
            >
              <h3 className="text-lg w-[150px] truncate font-medium">
                {outlet.name}
              </h3>
              <p className="text-sm w-[130px] truncate">{outlet.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OutletsDropdown;
