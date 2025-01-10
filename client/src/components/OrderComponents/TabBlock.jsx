import React, { useState } from "react";
import { motion } from "framer-motion";
import Btn from "../../reuseableComponent/Buttons/Btn";
import Dropdown from "../../components/Dropdown";
import clsx from "clsx";

const TabBlock = ({ tabs , showBtn=false }) => {
  const [selected, setSelected] = useState(0);

  const handleSelectedDropdownOption = (val) => {
    console.log("valiiiiii", val);
    if (val === "deleteMenu") {
      alert(val);
    }
  };

  return (
    <div className="bg-white rounded-md p-4">
      <div className={clsx(`flex items-center ${showBtn ? "justify-between" : "justify-evenly"}`)}>
        <div
          className="flex items-center
       justify-center flex-wrap gap-2"
        >
          {tabs.map((tab, index) => (
            <div key={index}>
              <Chip
                text={tab.title}
                selected={selected === index}
                setSelected={setSelected}
                index={index}
              />
            </div>
          ))}
        </div>

        {showBtn && (
          <div className="flex justify-between gap-2 items-center">
            <Btn
              title={"Add Staff"}
              frontIcon={"CirclePlus"}
              classNames={"bg-primary text-white"}
            />

            <Dropdown
              title={"Action"}
              menuOptions={exportOptions}
              showBtn={false}
              selectedDropdown={(val) => handleSelectedDropdownOption(val)}
            />
          </div>
        )}
      </div>

      <div className="mt-4">
        {tabs[selected].content ? tabs[selected].content : <div> hi </div>}
      </div>
    </div>
  );
};

export default TabBlock;

const Chip = ({ text, selected, setSelected, index }) => {
  return (
    <button
      onClick={() => setSelected(index)}
      className={`${
        selected
          ? "text-white absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
          : "text-slate-700 bg-[#F5F5F5]"
      } text-sm transition-colors px-8 py-3 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};


const exportOptions = [
  {
    title: "Change Menu",
    icon: "SquarePen",
    value: "changeMenu",
  },
  {
    title: "Delete Menu",
    value: "deleteMenu",
    icon: "Trash2",
  },
  {
    title: "View Menu",
    value: "viewMenu",
    icon: "Eye",
  },
];