import mongoose from "mongoose";
import { Schema } from "mongoose";
const storeSchema = mongoose.Schema(
    {
        zipCode : {
            type: String,
            required: true,
        },
        locationName: {
            type: String,
            required: true,
        },
        latitude: {
            type: String,
            required: true,
        },
        longitude: {
            type: String,
            required: true,
        },
        item: {
            type: Schema.Types.ObjectId,
            ref: "item",
          },

    }
)

export const store =mongoose.Model('storeSchema',{name: String})