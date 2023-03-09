const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title></head></html>");
    res.write(
      '<body><form method="post" action="/process"><input name="message"></input ></form></body>'
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("Stream Finished");
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
    });
    res.write("Thanks you for submitting");
    res.end();
  } else {
    res.write("Not Found");
    res.end();
  }
});

server.listen(5000);
console.log("Listening on port 5000");

const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/big.txt`, "utf-8'");
const ourReadStream = fs.createReadStream(`${__dirname}/big.txt`);

ourReadStream.on("data", (chunk) => {
  //   console.log(chunk.toString());
  //   console.log(chunk);
});

// console.log("hello");
