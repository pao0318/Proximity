// const connectToMongo = require("./db");
// const express = require("express");
// const cors = require('cors')
// const app = express();
// const port = process.env.PORT || 5000;

// connectToMongo();

// app.get('/', (req,res)=>{
//   res.send('hello');
// });

// // For parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));


// app.use("/api/calendar", require("./routes/calendar"));
// app.use("/api/reviews", require("./routes/review"));
// app.use("/api/excercise", require("./routes/excercise"));

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import signUpBuyerRouter from './routes/customerRouter.js'; 

const app = express();

app.use(express.json());
app.use(cors());

// Mount the review router for the "/api/reviews" route
app.use('/api/signupbuyer', signUpBuyerRouter);

// Root route
app.get('/', (request, response) => {
    return response.status(234).send('Huihuihui');
});


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log(`App connected to MongoDB`);
        app.listen(PORT, () => {
            console.log(`App listening at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
