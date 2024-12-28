import { addData } from "@/app/backend/actions/actions";
import { User } from "@/app/backend/models/userModel";
import Button from "@/app/components/Button";
import React from "react";

const page = () => {
  return (
    <>
      <div className="p-4 w-[90%] mx-auto bg-primary rounded-lg">
        <form action={addData}>
          <div className="flex gap-4 my-2">
            <input
              name="username"
              type="text"
              placeholder="Username..."
              className="w-full p-3 bg-secondary outline-none text-white"
            />
            <input
              name="email"
              type="email"
              placeholder="Email..."
              className="w-full p-3 bg-secondary outline-none text-white"
            />
          </div>
          <div className="flex gap-4 my-2">
            <input
              name="password"
              type="text"
              placeholder="Password..."
              className="w-full p-3 bg-secondary outline-none text-white"
            />
            <input
              name="phone"
              type="phone"
              placeholder="Phone..."
              className="w-full p-3 bg-secondary outline-none text-white"
            />
          </div>
          <div className="flex gap-4 my-2">
            <select
              name="admin"
              className="w-full p-3 bg-secondary outline-none text-white text-gray-400"
            >
              <option selected disabled>
                Choose user type
              </option>
              <option value="true">Admin</option>
              <option value="false">User</option>
            </select>
            <select
              name="active"
              className="w-full p-3 bg-secondary outline-none text-white text-gray-400"
            >
              <option selected disabled>
                Choose Active type
              </option>
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
          </div>
          <textarea
            name="message"
            className="w-full p-3 bg-secondary outline-none text-white text-gray-400"
          ></textarea>
          <Button
            content="Add Data"
            loadingContent="Adding User..."
            color="bg-green-500"
            disabledColor="bg-gray-600"
          />
        </form>
      </div>
    </>
  );
};

export default page;
