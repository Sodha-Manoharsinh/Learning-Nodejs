import EventEmitter from "events";

// Creating Instance
const customEmitter = new EventEmitter();

// 1. on: listen/register for an event.
// 2. once: listen/register for an event which can be called for once.
// 3. emit: emit/call an event.

console.log("Start");

customEmitter.once("response", (name, age) =>
  console.log(`Name: ${name} | Age: ${age}`)
);

customEmitter.emit("response", "Manoharsinh", 20);
customEmitter.emit("response", "Mannu", 18);
customEmitter.emit("response", "Prithvi", 19);

console.log("End");
