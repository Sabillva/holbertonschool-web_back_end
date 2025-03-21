/*eslint-disable*/
const http = require("http");
const StudCount = require("./3-read_file_async");

const hostname = "localhost";
const port = "1245";
const DB = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (req.url === "/") {
    res.end("Hello Holberton School!");
  } else if (req.url === "/students") {
    res.write("This is the list of our students\n");
    StudCount(DB)
      .then((result) => {
        res.end(result.join("\n"));
      })
      .catch((error) => {
        res.end(`${error.message}`);
      });
  }
});

app.listen(port, hostname);
module.exports = app;
