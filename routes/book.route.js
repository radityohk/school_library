const express = require('express')
const app = express()
const port = 8000
app.use(express.json())
const bookController = require(`../controller/book.controller`)

app.get("/", bookController.getAllBooks)
app.post("/find", bookController.findBook)
app.post("/", bookController.addBook)
app.put("/:id", bookController.updateBook)
app.delete("/:id", bookController.deleteBook)

module.exports = app