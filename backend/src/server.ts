require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.listen('5000',()=>{
    console.log("server started")
})