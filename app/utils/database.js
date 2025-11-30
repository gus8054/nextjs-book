import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ehdgus8054:cCneOi7Fo2ElKf07@cluster0.fheuvkd.mongodb.net/nextAppDataBase?appName=Cluster0"
    );
    console.log("Success: Connected to MongoDB");
  } catch {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
