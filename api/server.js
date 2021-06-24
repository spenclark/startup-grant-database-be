const express = require("express");
const middleware = require("./middleware/server.middleware");
const routes = require("./routes/routes.index");

const server = express();
middleware(server);
routes(server);

server.use((error, req, res, next) => {
  if (error && error.name && error.name === "UnauthorizedError") {
    return res.status(error.status).json({ message: error.message });
  }
  // console.log('Req: %j', JSON.stringify(req))
  // console.log('Missed Error Handling Opportunity: %j', error);
  res.status(500).json({ message: "An Error Has Occurred", error });

  process.on("unhandledRejection", (reason, promise) => {
    new Promise((resolve, reject) => {
      reject(error);
    }).catch(error => {
      console.log(error);
    });
  });
});

module.exports = server;
