// Import mongoose
const mongoose = require('mongoose');

// Create schema definition objects using mapping notation
const  schemaDefinition = {
    name: {
        type: String,
        required:  true
    },
    dueDate: {
        type: Date,
    },
    course: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'TO DO'
    }
}

// Create a new schema using the definition object
let schemaObj = new mongoose.Schema(schemaDefinition);

// Create a new model using a new schema object and export model
module.exports = mongoose.model('Project', schemaObj);