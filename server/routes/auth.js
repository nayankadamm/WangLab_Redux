// auth.js
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../db/userSchema'); // Ensure the correct path
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { off } = require('../db/histSchema');
const JWT_SECRET = 'NAYANKADAM';
const fetchuser = require("../middleware/fetchuser")
// Registering the user
router.post('/register', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Sorry, a user with this email ID already exists' });
        }
        if(req.body.password!=req.body.confirmPassword){
            return res.status(400).json({error:"password does not match"})
        }
        const salt = await bcrypt.genSalt(10);
        const secpass = await bcrypt.hash(req.body.password, salt);

        // Create the user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secpass
        });

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, token });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

//login the user
router.post("/login",[
    body('email','enter the valid email').isEmail(),
    body("password","password cannot be blank").exists()],
async(req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
        const {email, password} = req.body
        try {
            
            let user = await User.findOne({email})
            if(!user){
                res.status(400).json({errors:"please enter the valid credentials"})
            }
            const passwordCompare = await bcrypt.compare(password,user.password)
            if(!passwordCompare){
                success = false
                return res.status(400).json({success,errors:"please enter the valid creds"})
            }
            const data = {
                user:{
                    id :user.id
                }
            }
            const authtoken = jwt.sign(data,JWT_SECRET);
            success = true
            res.json({success,authtoken})

        } catch (error) {
            console.error(error.message);
            res.status(500).send('Internal Server Error');
        }
})

//route:get user details //login required//need token
router.post("/getuser",fetchuser,async(req,res)=>{
    try {
        let userID = req.user.id;
        const user = await User.findById(userID).select("-password")
        res.json(user)
    }  catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;
