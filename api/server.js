const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const authRouter = require("../auth/authRouter");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/auth", authRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API running." });
});

module.exports = server;
