import express from "express";
import Buyer from '../models/customerModel.js';

const router = express.Router();

router.post('/', async(req, res) => {
  try {
    const { name, email, password, phoneNumber, location } = req.body;
    const newBuyer = new Buyer({
        name,
        email,
        password,
        phoneNumber,
        location
    });
    const savedBuyer = await newBuyer.save();
    console.log(savedBuyer); 
    return res.status(201).json({ message: 'Buyer signed up successfully in', savedBuyer });
} catch (error) {
    console.error('Error saving buyer:', error);
    return res.status(500).json({ error: 'Internal server error' });
}
});

export default router;