const express = require("express")
const db = require("../database")
const router = express.Router()

router.get("/", (req, res) => {
  db.any("SELECT * FROM po")

  .then((po) => {
    res.render("pages/purchases", {
      pageTitle: 'Purchase orders',
      po
    })
  })

  .catch((err) => {
    console.log(err)
    res.send(err.message)
  })
})

router.get("/new", (req, res) => {
  db.any("SELECT * FROM pricelist")

  .then((pricelist) => {
    console.log(pricelist)
    res.render("pages/new-sales", {
      pageTitle: 'New Sales',
      pricelist
    })
  })

})

module.exports = router