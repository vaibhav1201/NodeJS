const fs = require("fs");
let text = fs.readFile("test2.txt", "utf-8", (err, data)=>{console .log(err, data)});
console.log(text);
console.log("this is my mssg")