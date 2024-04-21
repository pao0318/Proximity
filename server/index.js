// const connectToMongo = require("./db");
// const express = require("express");
// const cors = require('cors')
// const app = express();
// const port = process.env.PORT || 5000;

// connectToMongo();

// // For parsing application/json
// app.use(express.json());

// //for calling direct from browser
// app.use(cors())

// app.get('/', (req,res)=>{
//   res.send('hello');
// });

// // For parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// //Available routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/calendar", require("./routes/calendar"));
// app.use("/api/reviews", require("./routes/review"));
// app.use("/api/excercise", require("./routes/excercise"));

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express()

app.get('/', (request, response) => {
    return response.status(234).send('Huihuihui');
})


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to mongo`);
        app.listen(PORT ,() => {
            console.log(`App listening on port ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })