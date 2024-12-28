"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const { User } = require("../models/userModel");

export const addData = async (formData) => {
  const { username, email, password, phone, admin, active, message } =
    Object.fromEntries(formData);

  const createdUser = await User.create({
    name: username,
    email,
    password,
    phone,
    admin,
    active,
    message,
  });

  redirect("/dashboard/users/show-users");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  const deleteUser = await User.findByIdAndDelete(id);

  revalidatePath("/dashboard/users/show-users");
};

export const checkUser = async (formData) => {
  const { email, password } = formData;

  const findUser = await User.findOne({
    email,
    password,
  });

  console.log(findUser);

  if (findUser) {
    return {
      name: findUser.name,
      email: findUser.email,
      password: findUser.password,
      phone: findUser.phone,
      admin: findUser.admin,
      active: findUser.active,
      message: findUser.message,
    };
  } else {
    throw new Error("Invalid Credetials");
  }
};
