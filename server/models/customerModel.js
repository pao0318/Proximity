import mongoose from "mongoose";
import { Schema } from "mongoose";

const buyerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phoneNumber : {
            type: String,
            required: true,
        },
        email : {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: false,
        },
        zipCode: {
            type: String,
            required: true,
        },
        paymentsList: {
            type: Array,
            required: false,
        },
        item: [
            {
            type: String,
            required: false,
          },
        ],

    }
)

export const buyer =mongoose.Model('buyerSchema',{name: String})