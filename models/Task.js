const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

const taskSchema = new Schema({

    userCreated: {
        type: String,
        required: true
      },
    
  
    taskName: {
        type: String,
        required: true
    },

    description: {
        type: String
    },
  
    dueDate: {
        type: String,
        required: true
    },

    timeComplete: {
        type: String,
        required: true
    },

    actionType: {
        type: String,
        required: true,
        default: 'Pending'
    },

    createdDate: {
        type: Date,
        default: new Date()
    },

});


module.exports = mongoose.model("task", taskSchema, "tasks");