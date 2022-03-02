const express = require('express')


// requiring router for our routes
const router = express.Router()

// getting controllers 
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks')



// get and post route for '/'
router.route('/').get(getAllTasks).post(createTask)
// get, patch, delete route for '/:id'
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router
