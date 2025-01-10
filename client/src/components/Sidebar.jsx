import React, { useState } from "react";
import { logo } from "../assets";
import Icon from "../helper/Icon";
import { sidebarMenu, restaurantOutlets } from "../constants";
import OutletsDropdown from "../reuseableComponent/OutletsDropdown";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState(3);
  const [expanded, setExpanded] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const toggleSubitems = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="h-screen overflow-y-scroll chalaja border-r-2 bg-white transition-all duration-300 group hover:w-[276px] w-[80px] group-hover:w-[276px]">
      {/* Logo Section */}
      <div className="flex items-center pl-5 w-full border-b-2 py-4">
        <img className="w-[40px] h-[40px]" src={logo} alt="Logo" />
        <span className="ml-3 font-bold text-[28px] hidden group-hover:block">
          Kravy
        </span>
      </div>

      {/* Outlets Dropdown */}
      <div className="hidden group-hover:block">
        <OutletsDropdown restaurantOutlets={restaurantOutlets} />
      </div>

      <div>
        <ul className="m-4">
          {sidebarMenu.map((menu, index) => (
            <div key={index}>
              <Link to={menu.subitems.length === 0 ? menu.url : "#"}>
                <li>
                  <div
                    className={`flex cursor-pointer ${
                      active === index
                        ? "bg-primary text-white"
                        : "hover:bg-primary hover:text-white"
                    } font-medium justify-between  p-3  my-1 rounded-md items-center`}
                    onClick={() => {
                      setActive(index);
                      toggleSubitems(index);
                    }}
                  >
                    <div className="flex items-center">
                      <Icon name={menu.icon} />
                      <span className="group-hover:ml-3 hidden group-hover:block">
                        {menu.title}
                      </span>
                    </div>
                    {menu.subitems && menu.subitems.length > 0 && (
                      <div className="hidden group-hover:block">
                        <Icon
                          name={
                            expanded === index ? "ChevronUp" : "ChevronDown"
                          }
                        />
                      </div>
                    )}
                  </div>
                  {expanded === index &&
                    menu.subitems &&
                    menu.subitems.length > 0 && (
                      <ul className="ml-3 hidden group-hover:block mt-2">
                        <div className="border-l-2 border-gray-400">
                          {menu.subitems.map((subitem, subIndex) => (
                            <Link to={subitem.url} key={subIndex}>
                              <li
                                className={`flex cursor-pointer ${
                                  activeSubItem === `${index}-${subIndex}`
                                    ? "bg-secondary text-primary"
                                    : "hover:bg-secondary hover:text-primary"
                                } font-medium pl-[10px] pr-[10px] py-2 my-1 rounded-md items-start`}
                                onClick={() =>
                                  setActiveSubItem(`${index}-${subIndex}`)
                                }
                              >
                                <span className="ml-3">{subitem.title}</span>
                              </li>
                            </Link>
                          ))}
                        </div>
                      </ul>
                    )}
                </li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
