import mongoose from "mongoose";
import { User } from "../models/userModel";
import { connectDB } from "../config";

export const getUserData = async (q) => {
  connectDB();

  let myUsers;

  if (!q) {
    // No query provided, return all users
    myUsers = await User.find();
  } else {
    // Match users whose name starts with the query
    const r = new RegExp(`^${q}`, "i");
    myUsers = await User.find({ name: { $regex: r } });
  }

  return myUsers;
};
