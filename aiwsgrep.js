/*
* aiwsgrep is my version of the linux grep command example.
* To run it we need to: node aiwsgrep.js <Pattern> <FileName>
* Example: node aiwsgrep.js ERROR server.log
*/

const fs = require('fs');
const path = require('path');

if(process.argv.length !==4) {
  console.log('Missing Arguments');
  console.log(`Usage: node ${path.basename(process.argv[1])} <arg1> <arg2>`);
  return;
}

let pattern = process.argv[2];
let filename = process.argv[3];
let content = fs.readFileSync(filename, 'utf-8');

let lines = content.split('\n');
for (let line of lines) {
  if (line.includes(pattern))
    console.log(line);
}
