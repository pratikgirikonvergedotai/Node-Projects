const express = require('express')



const router = express.Router()
// importing all controllers 
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
} = require('../controllers/jobs')

// post and get route for '/'
router.route('/').post(createJob).get(getAllJobs)


// get, delete, patch route for '/:id'
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router
