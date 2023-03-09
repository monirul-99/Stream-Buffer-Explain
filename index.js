const http = require("http");
const fs = require("fs");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<html><head><title>Form</title></head></html>");
//     res.write(
//       '<body><form method="post" action="/process"><input name="message"></input ></form></body>'
//     );
//     res.end();
//   } else if (req.url === "/process" && req.method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//       body.push(chunk);
//     });
//     req.on("end", () => {
//       console.log("Stream Finished");
//       const parseBody = Buffer.concat(body).toString();
//       console.log(parseBody);
//     });
//     res.write("Thanks you for submitting");
//     res.end();
//   } else {
//     res.write("Not Found");
//     res.end();
//   }
// });

// server.listen(5000);
// console.log("Listening on port 5000");

// const ourReadStream = fs.createReadStream(`${__dirname}/big.txt`, "utf8'");
// const ourReadStream = fs.createReadStream(`${__dirname}/big.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on("data", (chunk) => {
//   //   console.log(chunk.toString());
//   //   console.log(chunk);
// });

// ourReadStream.on("data", (chunk) => {
//   ourWriteStream.write(chunk);
// });

// Too Easy With Pipe
// ourReadStream.pipe(ourWriteStream);

const server = http.createServer((req, res) => {
  const myReadStream = fs.createReadStream(__dirname + "/big.txt");
  myReadStream.pipe(res);
});

server.listen(5000);
console.log("Listening on port 5000");
