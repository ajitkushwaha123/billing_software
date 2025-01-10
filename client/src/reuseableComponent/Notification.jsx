import Icon from "../helper/Icon";
import { notificationData } from "../constants";

export default function Notification() {
  return (
    <div>
      <div className="bg-white rounded-lg relative text-[#303030] py-4 m-0 h-[580px] overflow-y-scroll chalaja font-poppins w-[500px]">
        <div className="text-xl px-4 font-medium text-start pb-4">
          Notification
        </div>

        <div className="pb-[30px]">
          {notificationData.map((data, index) => (
            <div
              key={index}
              className={`flex border-t-2 justify-start px-3 w-[100%] ${
                data.unread ? "bg-slate-100" : "bg-white"
              } py-5 items-start`}
            >
              <div className="bg-secondary p-2 rounded-md">
                <img
                  src={data.image}
                  width="35"
                  height="35"
                  alt="Notification Icon"
                />
              </div>

              <div className="ml-5">
                <div>
                  <div className="flex justify-start items-center">
                    <span className="text-lg truncate max-w-[200px] text-start font-bold">
                      {data.name}
                    </span>
                    <div className="flex justify-start text-start items-center">
                      <Icon name="Dot" /> <span>{data.time}</span>
                    </div>
                  </div>
                  <div className="text-tiny items-start text-start">
                    {data.order}
                  </div>
                </div>

                <div className="mt-[15px]">
                  {data.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex my-[10px] bg-white w-full ${
                        data.unread ? "" : ""
                      } justify-between items-center shadow-md rounded-md py-2 px-[20px]`}
                    >
                      <span className="w-[10%]">{item.quantity}</span>
                      <p className="w-[80%] truncate ml-3 text-start">{item.name}</p>
                      <span className="w-[10%] ml-3">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="flex w-full justify-end mt-[16px] items-end">
                  <button className="px-[14px] py-2 text-primary border-2 border-primary rounded-lg">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className=" bottom-0 left-0 right-0 w-full bg-[#fff6f6]  shadow-lg rounded-md">
          <div className="flex justify-between items-center text-[17px] px-10 py-3">
            <button className="text-primary text-small">
              Mark all as read
            </button>
            <button className="text-white bg-primary rounded-md px-5 py-2 shadow-sm">
              View all notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
