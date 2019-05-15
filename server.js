
const express = require("express")
const path = require("path")
const app = express();

const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req,res) => {
  console.log("Delivered HTML");
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

app.get("/submit", (req, res) => {
  console.log(`Welcome ${req.body.fullname}`);
})

app.listen(port, (err,data) => {
  console.log(`Server running on port ${port}`);
})