import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authroutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); // to parse the incoming requests with JSON payload (from req.body)
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req,res) => {
    // root route http://localhost:5000/
    res.send("Hello World!");
})


app.listen(PORT, () =>{
    connectToMongoDB();
    console.log(`Server running on ${PORT}`);
});