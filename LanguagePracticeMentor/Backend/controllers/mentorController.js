// backend/controllers/mentorController.js
const Mentor = require('../models/mentorModel');

// Get all mentors
const getMentors = async (req, res) => {
    try {
        const mentors = await Mentor.find();
        res.status(200).json(mentors);
    } catch (error) {
        console.error('Error fetching mentors:', error);
        res.status(500).json({ message: 'Error fetching mentors' });
    }
};

// Get mentor by ID
const getMentorById = async (req, res) => {
    try {
        const mentor = await Mentor.findOne({ mentor_id: req.params.mentor_id });
        if (!mentor) {
            return res.status(404).json({ message: 'Mentor not found' });
        }
        res.status(200).json(mentor);
    } catch (error) {
        console.error('Error fetching mentor:', error);
        res.status(500).json({ message: 'Error fetching mentor' });
    }
};

// Add new mentor
const addMentor = async (req, res) => {
    try {
        // Check if mentor_id already exists
        const existingMentor = await Mentor.findOne({ mentor_id: req.body.mentor_id });
        if (existingMentor) {
            return res.status(400).json({ message: 'Mentor ID already exists' });
        }

        // Check if email already exists
        const existingEmail = await Mentor.findOne({ email: req.body.email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const mentor = new Mentor(req.body);
        const savedMentor = await mentor.save();
        res.status(201).json(savedMentor);
    } catch (error) {
        console.error('Error adding mentor:', error);
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getMentors,
    getMentorById,
    addMentor
};