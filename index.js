const express = require('express')
const app = express();

const m1 = require("./data")
app.use("/p",m1)
app.listen(3002)

