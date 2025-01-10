import React, { useState } from "react";
import Icon from "../../../helper/Icon";
import Dropdown from "../../../components/Dropdown";
import Btn from "../../../reuseableComponent/Buttons/Btn";
import { motion } from "framer-motion";
import DeleteModal from "../../../Modals/DeleteModal";

const Menu = [
  {
    title: "WhatsApp Image 2024-10-07 at 7.42.28 PM",
    img: "https://tse3.mm.bing.net/th?id=OIP.H79x8VOhsze8o7zPUSSWdAHaEp&pid=Api&P=0&h=180",
  },
  {
    title: "WhatsApp Image menu-2 2024-10-07 at 7.42.28 PM",
    img: "https://marketplace.canva.com/EAFI_i7T__g/1/0/1131w/canva-brown-black-modern-restaurant-food-menu-portrait-MqWj4UijfwU.jpg",
  },
  {
    title: "WhatsApp Image 2024-10-07 at 7.42.28 PM",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce312774598075.5edd3c062ff96.jpg",
  },
  {
    title: "WhatsApp Image 2024-10-07 at 7.42.28 PM",
    img: "https://image.shutterstock.com/z/stock-vector-restaurant-cafe-menu-template-design-food-flyer-293829758.jpg",
  },
];

const PhysicalMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState([]);
  const [showModel, setShowModel] = useState(false);
  console.log("showModel", showModel);

  const handleCheckboxChange = (index) => {
    setSelectedMenu((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

    console.log("selectedMenu", selectedMenu);
  };

  const handleSelectedDropdownOption = (val) => {
    console.log("valiiiiii", val);
    if (val === "deleteMenu") {
      setShowModel(true);
      alert(showModel);
    }
  };

  return (
    <div className="p-5">
      <div className="flex mb-5 rounded-md p-5 bg-white justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-700">Physical Menu</h1>
        <Btn
          title={"Add Menu"}
          frontIcon={"CirclePlus"}
          classNames={"bg-primary text-white"}
        />
      </div>
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {Menu.map((menu, index) => (
          <motion.li
            key={index}
            className="relative"
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="checkbox"
              id={`menu-option-${index}`}
              className="hidden peer"
              onChange={() => handleCheckboxChange(index)}
            />
            <label
              htmlFor={`menu-option-${index}`}
              className={`flex flex-col items-center justify-between w-full p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer shadow-md ${
                selectedMenu.includes(index)
                  ? "border-blue-600 bg-blue-50"
                  : "hover:border-gray-400"
              }`}
            >
              <div className="w-full h-[150px] overflow-hidden rounded-t-lg">
                <img
                  className="w-full h-full object-cover"
                  src={menu.img}
                  alt={`Menu ${index + 1}`}
                />
              </div>
              <div className="flex items-center justify-between w-full px-2 mt-3">
                <h1 className="truncate text-gray-700 font-medium">
                  {menu.title}
                </h1>
                <div className="z-50">
                  <Dropdown
                    title={"DropDown"}
                    menuOptions={exportOptions}
                    btn={<Icon size={22} name="EllipsisVertical" />}
                    showBtn={true}
                    selectedDropdown={(val) =>
                      handleSelectedDropdownOption(val)
                    }
                  />
                </div>
              </div>
            </label>
          </motion.li>
        ))}
      </ul>

      <DeleteModal isOpen={showModel} handleModalChange={(val) => setShowModel(val)} />
    </div>
  );
};

export default PhysicalMenu;

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
