import express from "express";

import dotenv from "dotenv";
import mongoose from "mongoose";



import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
// const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI
// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrLParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error", error)
}

// defining route
app.use("/book", bookRoute)
app.use("/user", userRoute)




app.listen(PORT, "localhost", () => {
    console.log(`server is running at the port http://localhost:${PORT}`)
})