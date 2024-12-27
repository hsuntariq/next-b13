import React from "react";
import { FaUser } from "react-icons/fa";

const Cards = () => {
  return (
    <>
      <div className="flex gap-3 w-full my-4 mx-auto">
        {Array.from({ length: 3 }).map((_, index) => {
          return (
            <div className="w-full text-white">
              <div className="bg-primary p-5 rounded-lg flex flex-col">
                <div className="flex">
                  <FaUser />
                  <h5 className="text-sm">Total Users</h5>
                </div>
                <h2 className="text-2xl font-bold">10,430</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
