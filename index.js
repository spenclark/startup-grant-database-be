require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
process.on("unhandledRejection", (reason, promise) => {
  Promise.reject(new Error("This is fine"));
});
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
