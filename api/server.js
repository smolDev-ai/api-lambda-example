const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(morgan("combined"));

server.get("/", (req, res) => {
  res.send("SERVER IS RUNNINGGGGGGGGG");
});

module.exports = server;
