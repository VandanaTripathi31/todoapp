const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true, // Task is required
        trim: true, // Trims any extra spaces
        minlength: 1 // Ensures the task has at least one character
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
})

const TodoModel = mongoose.model("Todo", TodoSchema)
module.exports = TodoModel
