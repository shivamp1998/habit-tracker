const express = require('express');
const Habit = require('../models/Habit');
const router = express.Router();

// Get all habits
router.get('/', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.render('index', { habits, error: null });
  } catch (error) {
    res.render('index', { habits: [], error: 'Failed to load habits.' });
  }
});

// Get habit detail
router.get('/:id', async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) {
      return res.redirect('/habits');
    }
    res.render('habitDetail', { habit });
  } catch (error) {
    res.redirect('/habits');
  }
});

// Add a new habit
router.post('/add', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    const habits = await Habit.find();
    return res.render('index', { habits, error: 'Habit name cannot be empty.' });
  }

  const habit = new Habit({ name, dates: [] });

  try {
    await habit.save();
    res.redirect('/habits');
  } catch (error) {
    const habits = await Habit.find();
    res.render('index', { habits, error: 'Failed to add habit.' });
  }
});

// Update habit status
router.post('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { date, status } = req.body;

  try {
    const habit = await Habit.findById(id);
    const existingDate = habit.dates.find((d) => d.date === date);

    if (existingDate) {
      existingDate.status = status;
    } else {
      habit.dates.push({ date, status });
    }

    await habit.save();
    res.redirect(`/habits/${id}`);
  } catch (error) {
    res.redirect('/habits');
  }
});

module.exports = router;
