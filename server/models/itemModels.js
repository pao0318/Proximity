import mongoose from "mongoose";
import { Schema } from "mongoose";
const itemSchema = mongoose.Schema(
    {
        omniId : {
            type: String,
            required: true,
        },
        itemName: {
            type: String,
            required: true,
        },
        itemDescription: {
            type: String,
            required: true,
        },
        itemImage: {
            type: String,
            required: true,
        },
        itemPrice: {
            type: Number,
            required: true,
        }, 

    }
)

export const item =mongoose.Model('itemSchema',{name: String})