const fs = require("fs");
let text = fs.readFileSync("vaibhav.txt", "utf-8");
text = text.replace("Let's vaibhav if it works!", "text is dynamicaly changed")
console.log(text)
fs.writeFileSync("dynamic.txt", text);
