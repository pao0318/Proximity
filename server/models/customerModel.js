import mongoose from "mongoose";
const { Schema } = mongoose;

const buyerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: true,
    },
    location: {
        type: String,
    },
    zipCode: {
        type: String,
    },
    paymentsList: {
        type: [String], 
    },
    items: [{ 
        type: String,
    }],
});

const Buyer = mongoose.model('buyer', buyerSchema);
export default Buyer;