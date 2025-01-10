import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Icon from "../helper/Icon";
import { motion } from "motion/react";
import clsx from "clsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const menuOptions = [
//   {
//     title: "Edit",
//     // icon: PencilAltIcon,
//   },
//   {
//     title: "Duplicate",
//     // icon: DuplicateIcon,
//   },
//   {
//     title: "Archive",
//     // icon: ArchiveIcon,
//   },
//   {
//     title: "Move",
//     // icon: ArrowCircleRightIcon,
//   },
//   {
//     title: "Share",
//     // icon: UserAddIcon,
//   },
//   {
//     title: "Add to favorites",
//     // icon: HeartIcon,
//   },
//   {
//     title: "Delete",
//     // icon: TrashIcon,
//   },
// ];

export default function DropDown({
  title,
  menuOptions,
  btn,
  showBtn = false,
  selectedDropdown,
}) {
  const handleSelectedDropdownOption = (val) => {
    selectedDropdown(val);
    console.log("val", val);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          {showBtn ? (
            <div>{btn}</div>
          ) : (
            <motion.button
              whileTap={{ scale: 0.9 }}
              className={clsx(
                `flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 outline-none`
              )}
            >
              <div className="flex items-center">
                <Icon size={18} name={"FileClock"} />
                <span className="mx-1">{title}</span>
              </div>
            </motion.button>
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-black divide-y divide-gray-100 focus:outline-none">
          {menuOptions.map((option, index) => (
            <motion.div whileTap={{ scale: 0.9 }} key={index} className="py-1">
              <Menu.Item
                onClick={() => handleSelectedDropdownOption(option.value)}
              >
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "group flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    <span className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500">
                      <Icon size={18} name={option.icon} />
                    </span>
                    {option.title}
                  </a>
                )}
              </Menu.Item>
            </motion.div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
