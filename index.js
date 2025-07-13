const express = require("express");
require('./db/config');
const User = require('./db/User');

const app = express();
app.use(express.json());

app.post("/register", async(req,res)=>{
  let user = new User(req.body)
  res.send(req.body);
})

app.listen(3000);
