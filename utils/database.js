import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is connected!");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "acme_dev_job_board",
      useNewUrlParser: true,
      useUnifiedTopology: "",
    });

    isConnected = true;
    console.log("MongoDB connected!");
  } catch (error) {
    console.log("MongoDB is connection error: ", error);
  }
};
