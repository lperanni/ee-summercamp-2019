const express = require("express")

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