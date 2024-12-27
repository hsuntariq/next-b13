import { connectDB } from "@/app/backend/config";
import { getUserData } from "@/app/backend/data/fetch";
import React from "react";

const page = async () => {
  const userData = await getUserData();
  return (
    <>
      <div className="p-4 w-[90%] mx-auto bg-primary rounded-lg">
        <h2 className="text-2xl text-gray-200">Latest Transaction</h2>
        <table className="text-white text-start capitalize w-full ">
          <thead className="text-start">
            <tr className="text-start">
              <th className="text-start">Name</th>
              <th className="text-start">status</th>
              <th className="text-start">email</th>
              <th className="text-start">message</th>
              <th className="text-start">update</th>
              <th className="text-start">delete</th>
            </tr>
          </thead>
          <tbody className="">
            {userData?.map((item, index) => {
              return (
                <>
                  <tr>
                    <td className="py-4">{item?.name}</td>
                    <td className="py-4"> {item?.admin ? "admin" : "user"} </td>
                    <td className="py-4">{item?.email}</td>
                    <td className="py-4">{item?.message}</td>
                    <th className="text-start">
                      <button className="bg-blue-700 text-white py-1 rounded-full px-4">
                        Update
                      </button>
                    </th>
                    <th className="text-start">
                      <button className="bg-red-700 text-white py-1 rounded-full px-4">
                        delete
                      </button>
                    </th>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
