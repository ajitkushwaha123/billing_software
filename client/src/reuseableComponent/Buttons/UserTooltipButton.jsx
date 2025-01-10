/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import UserProfileButton from "./UserProfileButton";
import Icon from "../../helper/Icon";
import { logo } from "../../assets";
import Btn from "./Btn";
import { motion } from "motion/react";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    // icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    // icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    // icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    // icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    // icon: RefreshIcon,
  },
];

const callsToAction = [
  { name: "Profile", href: "#", icon: "User" },
  { name: "Account Settings", href: "#", icon: "Settings" },
  { name: "End Shift", href: "#", icon: "LogOut" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UserTooltipButton() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900 outline-none" : "text-gray-500 outline-none"
            )}
          >
            <Btn btn={<UserProfileButton />} />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="relative grid gap-6 bg-white sm:gap-8">
                  <div className="flex pl-[20px] border-b-[1px] p-5 items-center">
                    <img className="w-[50px] h-[50px]" src={logo} />
                    <div className="ml-3">
                      <h3 className="text-lg font-bold truncate text-start">
                        John Doe
                      </h3>
                      <p className="text-sm text-start">Manager</p>
                    </div>
                  </div>
                </div>
                <div className="p-5 bg-gray-50 space-y-6">
                  {callsToAction.map((item, index) => (
                    <div key={index} className="flow-root">
                      <motion.a
                        // whileHover={{
                        //   scale: 1.1,
                        //   transition: { duration: 0.5 },
                        // }}
                        whileTap={{ scale: 0.9 }}
                        href={item.href}
                        className={`-m-3 p-3 flex items-center rounded-md text-base font-medium ${
                          item.icon === "LogOut"
                            ? "text-red-500"
                            : "text-gray-900"
                        } hover:bg-gray-100 transition ease-in-out duration-150`}
                      >
                        <Icon name={item.icon} />
                        <span className="ml-3">{item.name}</span>
                      </motion.a>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
