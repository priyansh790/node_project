const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, "connect sucessfully");
    res.end("Hello world");
  })
  .listen(5000);
