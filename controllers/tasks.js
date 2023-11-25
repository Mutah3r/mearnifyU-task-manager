const Task = require("../models/task");
const asyncWrapper = require("../middleware/async_js");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

const createTask = async (req, res) => {
  try {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      dueDate: new Date(req.body.dueDate),
      completed: req.body.completed,
    };

    const task = await Task.create(newTask);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
};

const getTask = asyncWrapper(async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

const updateTask = asyncWrapper(async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).send({ error: true, message: error.message });
  }
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
