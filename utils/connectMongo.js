import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING);
console.log("DB connected");

export default connectMongo;
