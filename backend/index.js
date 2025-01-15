const express = require('express');
require('dotenv').config();
const { connectionDb } = require("./db")
const rootRouter = require("./routes/index");
const cors = require("cors");

connectionDb()

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(3000);