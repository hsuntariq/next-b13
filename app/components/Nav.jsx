import React from "react";
import { FaBell } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";

const Nav = () => {
  return (
    <>
      <div className="flex justify-between p-5 bg-primary rounded-lg my-4 w-[90%] mx-auto items-center">
        <h2 className="text-3xl text-white">Dashboard</h2>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-1 px-3 rounded-md bg-[#2E374A] "
          />
          <FaBell color="white" />
          <FaGlobe color="white" />
          <IoIosChatboxes color="white" />
        </div>
      </div>
    </>
  );
};

export default Nav;
