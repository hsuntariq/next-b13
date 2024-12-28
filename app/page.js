"use client";
import React, { useState } from "react";
import Button from "./components/Button";
import { checkUser } from "./backend/actions/actions";
import toast, { Toaster } from "react-hot-toast";
const page = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userData = await checkUser({ email, password });
      localStorage.setItem("next-user", JSON.stringify(userData));
      window.location.assign("http://localhost:3000/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="min h-screen flex justify-center items-center">
        <div className="w-[40%] mx-auto my-5 rounded-lg bg-gradient-to-r from-pink-400 to-red-700 p-5 shadow-lg ">
          <h1 className="text-center text-white font-bold text-3xl">Sign In</h1>
          <form>
            <label htmlFor="" className="text-white font-bold">
              Email
            </label>
            <input
              name="email"
              onChange={handleChange}
              value={email}
              type="text"
              placeholder="Email..."
              className="bg-gray-200 text-black my-2 shadow w-full p-2 rounded-full outline-none focus:border-green-500 focus:border rounded-3"
            />
            <label htmlFor="" className="text-white font-bold">
              Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              value={password}
              type="text"
              placeholder="Password..."
              className="bg-gray-200 text-black shadow my-2 w-full p-2 rounded-full outline-none focus:border-green-500 focus:border rounded-3"
            />
            <Button
              action={signIn}
              content="Sign In"
              loadingContent="Signing in..."
              disabledColor={"bg-gray-300"}
              color={"bg-gradient-to-l from-blue-500 to-blue-900"}
              customStyle={
                "p-2 rounded-full hover:bg-gradient-to-l hover:to-blue-500 hover:from-blue-900"
              }
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
