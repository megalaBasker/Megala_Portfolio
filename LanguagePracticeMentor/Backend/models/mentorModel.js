const mongoose = require('mongoose');

// Define review schema for mentor reviews
const reviewSchema = new mongoose.Schema({
    reviewer: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    comment: {
        type: String,
        required: true
    }
});

// Define time slot schema for mentor availability
const timeSlotSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true
    },
    time_slot: {
        type: String,
        required: true
    }
});

// Mentor Schema
const mentorSchema = new mongoose.Schema({
    mentor_id: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    language_specialization: [{
        type: String,
        required: true
    }],
    bio: {
        type: String,
        required: true
    },
    years_of_experience: {
        type: Number,
        required: true
    },
    available_times: [timeSlotSchema],
    location: {
        type: String,
        required: true
    },
    price_per_hour: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    reviews: [reviewSchema],
    certifications: [{
        type: String
    }],
    preferred_communication_method: {
        type: String,
        required: true
    },
    languages_spoken: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
});

const Mentor = mongoose.model('Mentor', mentorSchema);
module.exports = Mentor;
