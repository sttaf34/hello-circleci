var http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello, Circle CI world!!");
});

const port = process.env.PORT || 8500;
server.listen(port, () => {
  console.log("Serving....");
});
