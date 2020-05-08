// const mongoose = require('mongoose')

// const actionSchema = new mongoose.Schema({
//   details: { action: String, checked: { type: Boolean, default: false } }
// })
// const scenarioSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   name: {
//     type: Number,
//     default: 1
//   },
//   actions: [actionSchema]
// })

// mongoose.model('Action', scenarioSchema)

const mongoose = require('mongoose')

const scenarioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  action: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  }
})

mongoose.model('Action', scenarioSchema)

// action
// :
// "An Action"
// completed
// :
// "false"
// userId
// :
// "ObjectId"
