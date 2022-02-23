const express = require('express');
const cors = require('cors');


require('dotenv').config();

const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});



app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.use(cors());




app.get("/", (req, res) => {
    res.status(200).send({"message": "Hello World!"})
});









