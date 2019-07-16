const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();

const authRouter = require("../auth/authRouter");
const postRouter = require("./routes/postRouter");

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/auth", authRouter);
server.use("/api/post", postRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "API running." });
});

module.exports = server;
