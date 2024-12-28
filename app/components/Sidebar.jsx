import React from "react";
import { FaUser } from "react-icons/fa";
import { sidebar_data } from "../data/sidebar_data";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="xl:w-[20%] lg:w-[25%] p-5 md:w-[35%] bg-primary min-h-screen w-full">
      <div className="flex gap-4 items-center">
        <div className="p-5 bg-gray-600 text-white  rounded-full">
          <FaUser />
        </div>
        <div className="flex flex-col ">
          <h5 className="font-bold text text-white">User</h5>
          <p className="text-gray-400">Admin</p>
        </div>
      </div>
      <ul className="unstyled my-5 flex flex-col gap-3">
        {sidebar_data?.map((item, index) => {
          return (
            <>
              <li
                className="text-gray-500 font-bold text-xl capitalize"
                key={index}
              >
                {item?.title}
              </li>
              {item?.items?.map((item2, index2) => {
                return (
                  <>
                    <Link
                      href={item2?.link}
                      className="text-decoration-none  text-white"
                    >
                      <li
                        key={index2}
                        className="flex gap-3 hover:bg-secondary p-3 transition-all rounded-full cursor-pointer  text-1xl capitalize font-semibold items-center"
                      >
                        <div className="text-white">{item2?.icon}</div>
                        <h4 className="text-white">{item2?.title}</h4>
                      </li>
                    </Link>
                  </>
                );
              })}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
