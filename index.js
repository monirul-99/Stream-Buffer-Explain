const fs = require("fs");
// const ourReadStream = fs.createReadStream(`${__dirname}/big.txt`, "utf-8'");
const ourReadStream = fs.createReadStream(`${__dirname}/big.txt`);

ourReadStream.on("data", (chunk) => {
  //   console.log(chunk.toString());
  console.log(chunk);
});

console.log("hello");
