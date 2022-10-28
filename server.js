const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("home.html", (err, data) => {
      if (err) throw err;
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/home") {
    res.writeHeader(200, { "Content-Type": "text/html" });
    // res.redirect("/");
    res.end();
  } else if (req.url === "/contact") {
    fs.readFile("contact.html", (err, data) => {
      if (err) throw err;
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) throw err;
      res.writeHeader(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.write("Contents you are looking are Not Found");
    res.end();
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
