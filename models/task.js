const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
    maxLength: [20, "name can not be more than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "must provide description"],
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  dueDate: {
    type: Date,
    required: [true, "must provide the due date"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", taskSchema);
