import express from "express";
import mongoose from "mongoose";
import cookieParser from 'cookie-parser'
import PageRoutes from "./routes/PageRoutes";
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use("/api", PageRoutes)

mongoose.connect(process.env.DB_URI)
 .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("Listening on port", process.env.PORT || 3000)
    })
 })
 .catch((error) => {
    console.log(error)
 })