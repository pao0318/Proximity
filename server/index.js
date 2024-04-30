import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import cors from "cors";
import signUpBuyerRouter from './routes/customerRouter.js'; 

const app = express();

app.use(express.json());
app.use(cors());

// Mount the review router for the "/api/reviews" route
app.use('/api/auth', signUpBuyerRouter);

// 
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
