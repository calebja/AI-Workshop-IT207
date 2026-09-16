/*
* FANCY LINUX CONCATENATE (CAT) COMMAND IN JAVASCRIPT
* Syntax: node fancycat.js <file1> <file2> <file3>
* Example: node fancycat.js server.log server2.log server3.log
*/

const fs = require("fs");

const file1 = process.argv[2];
const file2 = process.argv[3];
const file3 = process.argv[4];

if (!file1 || !file2 || !file3) {
    console.log("Error: Please enter three file names.");
    console.log("Example: node cat.js file1.txt file2.txt file3.txt");
} else {
    const content1 = fs.readFileSync(file1, "utf8");
    const content2 = fs.readFileSync(file2, "utf8");
    const content3 = fs.readFileSync(file3, "utf8");

    const combined = content1 + "\n" + content2 + "\n" + content3;
    const lines = combined.split("\n");

    for (let i = 0; i < lines.length; i++) {
        console.log((i + 1) + "\t" + lines[i]);
    }
}
