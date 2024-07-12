const express = require("express");
const router = express.Router();
const History = require("../db/histSchema");
const { body, validationResult } = require("express-validator");

// Saving the new history
router.post("/",
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

module.exports = router;
