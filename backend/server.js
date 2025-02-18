import express from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
import PageRoutes from "./routes/PageRoutes.js";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", PageRoutes)

mongoose.connect(process.env.DB_URI)
 .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on port " + process.env.PORT)
    })
 })
 .catch((error) => {
    console.log(error)
 })