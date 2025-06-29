import express from "express";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
const app = express();
import cors from 'cors'

dotenv.config();
const PORT = process.env.PORT || 8080;

//database config
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use("/api/v1/auth", authRoutes);


// rest api

app.get("/", (req, res) => {
    res.send("<h1>welcome to the ecommerce app</h1>");

});

app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`);
});

