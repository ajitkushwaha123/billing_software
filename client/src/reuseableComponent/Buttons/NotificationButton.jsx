import  Icon  from "../../helper/Icon";
import React from 'react'

const NotificationButton = () => {
  return (
    <div className="px-2 rounded-full mx-5 border-2 py-2">
      <Icon className=" rounded-full" name={"Bell"} />
    </div>
  );
}

export default NotificationButton
