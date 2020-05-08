const express = require('express')
const mongoose = require('mongoose')
const requireAuth = require('../middlewares/requireAuth')

const Action = mongoose.model('Action')

const router = express.Router()

router.use(requireAuth)

router.get('/actions', async (req, res) => {
  const actions = await Action.find()
  res.send(actions)
})

router.post('/actions', async (req, res) => {
  const { action } = req.body

  if (!action) {
    return res.status(422).send({ error: 'You must provide an action' })
  }

  try {
    const scenario = new Action({ action, userId: req.user._id })
    await scenario.save()
    console.log(scenario)

    res.send(scenario)
  } catch (err) {
    res.status(422).send({ error: err.message })
  }
})

module.exports = router
