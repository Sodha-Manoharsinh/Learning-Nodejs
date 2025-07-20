import path from "path";
// use .. to go upper level
const url = path.join("c:", "Desktop", "courses", "node", "..", "index.js");
const url2 =
  "/home/bhupendrasinh/Desktop/All folders/Node-js/4. Path Module/index.js";
console.log(url);
console.log(path.basename(url));
console.log(path.basename(url, ".js"));
console.log(path.dirname(url));
console.log(path.extname(url));
console.log(path.normalize("c://redux//mycodes//something"));
console.log(path.parse(url2));
console.log(path.parse(url2).base); // we can select more properties like base, ext, name, etc
