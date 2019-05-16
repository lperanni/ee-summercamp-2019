const express = require("express")
const path = require("path")
const send = require("./send")
require('dotenv').config()
const app = express()

const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))


app.post("/submit", (req, res) => {
  
  send(req.body)
  res.redirect("/")
})

app.listen(port, (err,data) => {
  console.log(`Server running on port ${port}`)
})

app.use(express.static(path.join(__dirname, '../public')))
