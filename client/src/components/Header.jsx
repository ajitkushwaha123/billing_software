import React from "react";
import { logo } from "../assets";
import Icon from "../helper/Icon";
import NotificationButton from "../reuseableComponent/Buttons/NotificationButton";
import TooltipComponent from "../reuseableComponent/TooltipComponent";
import Notification from "../reuseableComponent/Notification";
import UserProfileButton from "../reuseableComponent/Buttons/UserProfileButton";
import UserTooltipButton from "../reuseableComponent/Buttons/UserTooltipButton";
import Btn from "../reuseableComponent/Buttons/Btn";

const Header = () => {
  return (
    <div className="font-poppins w-[100%] flex justify-between pr-[100px] items-center py-3 bg-white">
      <div className="flex justify-center items-center">
        <div>
          <span className="text-[22px] ml-4 font-medium">
            Sales Transaction
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="border-r-2 border-gray-100">
          <Btn
            title={"Dining Room"}
            rounded="full"
            classNames="border-2 mx-3 py-3 bg-white hover:bg-gray-100"
            showDownArrow={true}
          />
        </div>
        <Btn
          title={"New Order"}
          rounded="full"
          classNames="px-[20px] hover:bg-blue-700 flex justify-center items-center py-3 text-white bg-primary ml-3 rounded-full border-2"
          frontIcon={"Plus"}
        />
        <TooltipComponent
          Button={() => <NotificationButton />}
          Content={() => <Notification />}
        />

        <UserTooltipButton />
      </div>
    </div>
  );
};

export default Header;
