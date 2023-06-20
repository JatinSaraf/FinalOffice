const { config } = require("dotenv");
const express = require("express");
const app =express()
const cookieParser = require("cookie-parser");
const ErrorHandler = require("./utils/ErrorHandler");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}));
// app.use(fileUpload({useTempFiles: true}));


// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "../backend/config/.env",
    });
  }

app.use(ErrorHandler)

module.exports = app;