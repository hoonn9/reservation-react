import "./env";
import logger from "morgan";
import { GraphQLServer } from "graphql-yoga";
import { authenticateJwt } from "./passport";
import schema from "./schema";
import { isAuthenticated } from "./middlewares";
import { uploadController } from "./upload";

const express = require("express");
// const https = require("https");
// const http = require("http");
// const fs = require("fs");

// const options = {
// ca: fs.readFileSync("/etc/letsencrypt/live/hxxnsreservationc.tk/fullchain.pem"),
// key: fs.readFileSync("/etc/letsencrypt/live/hxxnsreservationc.tk/privkey.pem"),
// cert: fs.readFileSync("/etc/letsencrypt/live/hxxnsreservationc.tk/cert.pem")
// };

const PORT = process.env.PORT || 4000;

//context : resolver 끼리의 공유
const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({
    request,
    isAuthenticated
  })
});

server.express.use("/images", express.static("images"));

server.express.use(logger("dev"));
// 서버 Path 보호
// server.express.use(passport.authenticate("jwt"));
// 서버에 전달되는 모든 요청은 authenticateJwt 를 통과
server.express.use(authenticateJwt);
server.express.post("/api/upload", uploadController);
server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

// server.start({port: PORT, https: options}, () =>
//   console.log(`Server running on http://localhost:${PORT}`)
// );
