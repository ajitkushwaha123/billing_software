import React from "react";
import { logo } from "../../assets";
import Icon from "../../helper/Icon";

const UserProfileButton = () => {
  return (
    <div className="flex pl-[20px] border-l-2 items-center">
      <img className="w-[40px] h-[40px]" src={logo} />
      <div className="ml-3">
        <h3 className="text-lg font-bold truncate text-start max-w-[80px]">John Doedfgffdfhg</h3>
        <p className="text-sm text-start">Manager</p>
      </div>
    </div>
  );
};

export default UserProfileButton;
