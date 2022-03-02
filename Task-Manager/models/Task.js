const mongoose = require('mongoose')


// task schema in mongoose
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

// exporting and creating model of the task schema
module.exports = mongoose.model('Task', TaskSchema)
