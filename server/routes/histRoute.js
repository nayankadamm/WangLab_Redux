const express = require("express");
const router = express.Router();
const History = require("../db/histSchema");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser")
// Saving the new history
router.post("/", fetchuser,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("date").notEmpty().withMessage("Date is required"),
    body("startTime").notEmpty().withMessage("Start time is required"),
    body("endTime").notEmpty().withMessage("End time is required"),
    body("equipment").notEmpty().withMessage("Equipment is required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const history = new History({
      name: req.body.name,
      date: req.body.date,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      equipment: req.body.equipment,
      user:req.user.id
    });

    try {
      const newHistory = await history.save();
      res.json(newHistory);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  }
);

// Get all the history
router.get("/", async (req, res) => {
  const history = await History.find();
  res.json(history);
});

//get user specific history
router.get("/getuserhistory", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const history = await History.find({ user: userId }); // Assuming user field in history refers to userId
    res.json(history);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
