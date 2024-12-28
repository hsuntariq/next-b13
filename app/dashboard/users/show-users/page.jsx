import { deleteUser } from "@/app/backend/actions/actions";
import { connectDB } from "@/app/backend/config";
import { getUserData } from "@/app/backend/data/fetch";
import Button from "@/app/components/Button";
import React from "react";

const page = async ({ searchParams }) => {
  const params = await searchParams;

  const userData = await getUserData(params.q);
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
                      <form action={deleteUser}>
                        <input type="hidden" value={item?._id} name="id" />
                        <Button
                          customStyle={"rounded-full py-1 px-4"}
                          content={"Delete"}
                          loadingContent={"Deleting..."}
                          color={"bg-red-500"}
                          disabledColor={"bg-gray-400"}
                        />
                      </form>
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
