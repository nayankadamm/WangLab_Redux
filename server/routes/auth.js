const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../db/userSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'NAYANKADAM';

// Registering the user
router.post('/register', [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
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

        if (req.body.password !== req.body.confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' });
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

// Login the user
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Please enter valid credentials' });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Please enter valid credentials' });
        }

        const data = {
            user: {
                id: user.id
            }
        };

        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({ success: true, authtoken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

// Get user details (Login required)
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        let userID = req.user.id;
        const user = await User.findById(userID).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
