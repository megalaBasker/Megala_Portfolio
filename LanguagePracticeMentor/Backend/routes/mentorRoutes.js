const express = require('express');
const router = express.Router();
const { getMentors, getMentorById, addMentor } = require('../controllers/mentorController');
const { protect } = require('../middleware/authMiddleware');

// Protect all routes
router.use(protect);

// GET all mentors
router.get('/', getMentors);

// GET mentor by mentor_id
router.get('/:mentor_id', getMentorById);

// POST new mentor
router.post('/', addMentor);

module.exports = router;