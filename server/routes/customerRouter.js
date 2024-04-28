import express from "express";
import Buyer from '../models/customerModel.js';

let router = express.Router();

//Signup
router.post('/signupbuyer', async(req, res) => {
    let success=false;
  try {
    console.log("In signup")
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

//GetShopLists
// router.get('/getshoplist', async(req, res) => {
//     let success=false;
//   try {
//     const { name, email, password, phoneNumber, location } = req.body;
//     const newBuyer = new Buyer({
//         name,
//         email,
//         password,
//         phoneNumber,
//         location
//     });
//     const savedBuyer = await newBuyer.save();
//     success =true;
//     return res.status(201).json({success, savedBuyer});
// } catch (error) {
//     console.error('Error saving buyer:', error);
//     success = false;
//     return res.status(500).json({ success, error: 'Internal server error' });
// }
// });

//Route: to get shop list
router.get("/getshops",async (req,res) => {

});

//Route2: login: authenticate
router.post("/login",async (req, res) => {
      let success= false;
      const { email, password } = req.body;
      console.log(req.body);
      return res.status(200).json({success, message: "logged in"});
});

export default router;