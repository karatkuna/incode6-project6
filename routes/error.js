const express = require('express')
const router = express.Router();

router.get('*', (req, res) => {
  res.render('pages/error', {
    pageTitle: 'Error',
    message: req.query.message || "This page cannot be found"
  })
})

module.exports = router