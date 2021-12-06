const express = require("express")
const db = require("../database")
const router = express.Router()

router.get("/", (req, res) => {
  db.any("SELECT p.*, c.name AS categoryname FROM products p JOIN categories c ON c.id=p.category_id ORDER BY p.id DESC")

  .then((products) => {
    console.log(products)
    res.render("pages/products", {
      pageTitle: 'Products',
      products
    })
  })

  .catch((err) => {
    console.log(err)
    res.send(err.message)
  })
})

router.get("/new", (req, res) => {
  db.any("SELECT * FROM categories")

  .then((categories) => {
    console.log(categories)
    res.render("pages/new-product", {
      pageTitle: 'New Product',
      categories
    })
  })

})

module.exports = router