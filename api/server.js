const express = require("express");
const middleware = require("./middleware/server.middleware");
const routes = require("./routes/routes.index");

const server = express();
middleware(server);
routes(server);

server.use((error, req, res, next) => {
  new Promise((resolve, reject) => {
    resolve();
    reject(error);
  }).catch(error => {
    console.log(error);
  });
});

module.exports = server;
