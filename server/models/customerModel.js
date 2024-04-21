import mongoose from "mongoose";
import { Schema } from "mongoose";
const customerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phoneNumber : {
            type: String,
            required: true,
        },
        location: {
            type: String,
            required: true,
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

export const customer =mongoose.Model('customerSchema',{name: String})