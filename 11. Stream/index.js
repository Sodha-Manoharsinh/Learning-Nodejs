import { createReadStream } from "fs";

console.log("Start");
// const stream = new createReadStream("./data.txt", { highWaterMark: 9000 });
const stream = new createReadStream("./data.txt", { encoding: "utf8" });

stream.on("data", (data) => console.log(data)); // Callback functions are asycn

console.log("End");
