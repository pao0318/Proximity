import express from "express";
import Buyer from '../models/customerModel.js';

const router = express.Router();

router.post('/', async(req, res) => {
    let success=false;
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
    success =true;
    return res.status(201).json({success, savedBuyer});
} catch (error) {
    console.error('Error saving buyer:', error);
    success = false;
    return res.status(500).json({ success, error: 'Internal server error' });
}
});

export default router;