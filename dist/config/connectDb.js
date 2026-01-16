import mongoose from "mongoose";
import { config } from "./config.js";
export const connectDB = async () => {
    try {
        mongoose.connect(config.uri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};
//# sourceMappingURL=connectDb.js.map