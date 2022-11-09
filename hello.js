const fs = require("fs");
let text = fs.readFileSync("test.txt", "utf-8");
text = text.replace("test", "vaibhav")
console.log(text);
fs.writeFileSync("vaibhav.txt", text)