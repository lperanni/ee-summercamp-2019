const express = require("express")
<<<<<<< HEAD
const path = require("path")

const app = express()

const port = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }))


app.post("/submit", (req, res) => {
  console.log(`Welcome ${JSON.stringify(req.body)}`)
})

app.listen(port, (err,data) => {
  console.log(`Server running on port ${port}`)
})

app.use(express.static(path.resolve(__dirname, 'public')))
=======

const app = express();


const port = 3000;


app.use(express.urlencoded({ extended: true }));


app.post("/submit", (req, res) => {
  console.log(`Welcome ${JSON.stringify(req.body)}`);
})

app.listen(port, (err,data) => {
  console.log(`Server running on port ${port}`);
})

app.use(express.static(__dirname));
>>>>>>> 015ef3e9027ef54a6745c3d844c6ad06c08c9c4f
