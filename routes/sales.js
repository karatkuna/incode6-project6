const express = require("express")
const db = require("../database")
const router = express.Router()

router.get("/", (req, res) => {
  db.any("SELECT * FROM sales")

  .then((sales) => {
    res.render("pages/sales", {
      pageTitle: 'Sales',
      sales
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