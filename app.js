const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const appRouter = require("./routes/todoRoute.js");
const path = require('path'); 


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://aliGhouri:Alighouri@cluster0.fo9cxyz.mongodb.net/test"
);

app.use('/todo', appRouter)

app.use(express.static(path.join(__dirname, "./Frontend/build")))
app.get("*", function(_, res){
  res.sendFile(
    path.join(__dirname, "./Frontend/build/index.html"),
    function(err)
    {
      res.status(500).send(err)
    }
  )
})


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
