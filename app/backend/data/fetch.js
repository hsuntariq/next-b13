import mongoose from "mongoose";
import { User } from "../models/userModel";
import { connectDB } from "../config";

export const getUserData = async () => {
  connectDB();
  const myUsers = await User.find();
  return myUsers;
};
