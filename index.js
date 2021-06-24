require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.listen(
  port,
  () =>
    process.on("unhandledRejection", (reason, promise) => {
      Promise.reject(new Error("This is fine"));
    }),

  console.log(`\n** Running on port ${port} **\n`)
);
