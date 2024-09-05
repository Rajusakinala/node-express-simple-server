// const express = require("express");
import express from "express";

const app = express();
const port = 5000;
app.get("/", (req, res) => {
  res.send("Home");
});
app.get("/test", (req, res) => {
  res.send("Test");
});
app.listen(port, () => {
  console.log("Server running on post " + port);
});
