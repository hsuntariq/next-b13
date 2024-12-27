import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://pny:hello123@cluster0.xubhd.mongodb.net/next-db?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log(`Database connected on host:${mongoose.connection.host}`);
};
