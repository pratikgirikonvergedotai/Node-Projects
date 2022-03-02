const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

// get all tasks
const getAllTasks = asyncWrapper(async (req, res) => {
  // getting task which match the filter inside find
  const tasks = await Task.find({})
  // sending json and status code 
  res.status(200).json({ tasks })
})

// creating task 
const createTask = asyncWrapper(async (req, res) => {
  // creating task from data inside request body 
  const task = await Task.create(req.body)
  // sending json and status code
  res.status(201).json({ task })
})

// getting task for specific id 
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  // finding first one task that matches filter in findone
  const task = await Task.findOne({ _id: taskID })
  // sending custom error
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})

// deleting task for specific id
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  // finding and delete the task on basis of id provide in request params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})

// updating task for specific id
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  // find the task and update it 
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  // handling error
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})


// exporting all tasks
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
