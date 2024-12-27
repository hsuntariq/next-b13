import React from "react";
import { FaFire } from "react-icons/fa";

const Ad = () => {
  return (
    <>
      <div className="w-[20%] self-start  relative overflow-hidden">
        <img
          src="https://play-lh.googleusercontent.com/ZZqVYRMFI-ABhpTSbR2RRtu7qaqU6yPkZLeTOOauwA5GlpxBIl0zrM5XaKBuq8xG7Wo"
          alt=""
        />
        <div className="absolute text-white p-5 rounded-lg top-0 left-0 h-[100%] w-full bg-[rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-3 ">
            <FaFire />
            <h5 className="font-bold">Available now</h5>
          </div>
          <h5 className="font-bold">Lorem ipsum dolor sit amet consectetur.</h5>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eveniet aspernatur
          </p>
          <button className="bg-purple-500 p-2 my-3 w-full rounded-full text-white">
            Watch Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Ad;
