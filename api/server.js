const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const tasksRouter = require("./routers/tasksRouter");

const server = express();

server
  .use(helmet())
  .use(express.json())
  .use(cors())
  .use(morgan("combined"));

server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.send("SERVER IS RUNNINGGGGGGGGG");
});

module.exports = server;
