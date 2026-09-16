/*
* aiwshead is my version of the linux head command example.
* To run it we need to: node aiwshead.js <FileName>
* Example: node aiwshead.js server.log
*/

const fs = require('fs');

const filename = process.argv[2];
const content  = fs.readFileSync(filename, "utf-8");

lines = content.split("\n");

for (let i=0; i < 10 && i < lines.length; i++) {
  console.log(lines[i]);
}
