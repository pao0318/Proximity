import express from "express";
import bodyParser from 'body-parser';

const router = express.Router();

router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    return res.status(201).json({ message: 'Buyer signed up successfully' });
  });

export default router;