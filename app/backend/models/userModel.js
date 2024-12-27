import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
    admin: {
      type: Boolean,
    },
    active: {
      type: Boolean,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
