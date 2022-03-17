const express = require('express')
const models = require('../models');

// Models
let user = models.User;
let tracking = models.Tracking;
let product = models.Product;

const router = express.Router()

router.post('/searchProduct', async (req, res) => {
  const response = await tracking.findOne({
    include: [{model:product}],
    where: { code: req.body.code }
  })
  console.log(response)
})

module.exports = router